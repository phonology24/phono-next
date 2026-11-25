// Rate-card / quote requests land in the VocalLabs admin "Leads" list, tagged phonology.
// The browser posts here (never to Hasura) so the input is checked and rate-limited first.
export const dynamic = 'force-dynamic';

const GRAPHQL = process.env.LEADS_GRAPHQL_URL || 'https://db.vocallabs.ai/v1/graphql';
const TYPE = 'phonology';

const INSERT = (withDetails) => `mutation InsertLead($name: String!, $phone: String!, $email: String!, $referral: String!, $type: String!${withDetails ? ', $details: jsonb' : ''}) {
  insert_vocallabs_website_leads_one(object: {name: $name, phone_number: $phone, company_email_id: $email, referral: $referral, type: $type${withDetails ? ', details: $details' : ''}}) { id }
}`;

// shortcut: per-instance memory, resets on deploy; move to Redis/Cloudflare rules if spam gets through.
const hits = new Map();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > LIMIT;
}

const text = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function check(body) {
  const lead = {
    name: text(body.name, 100),
    email: text(body.email, 200).toLowerCase(),
    phone: text(body.phone, 30),
    company: text(body.company, 150),
    service: text(body.service, 80),
    countries: text(body.countries, 200),
    minutes: text(body.minutes, 40),
    message: text(body.message, 2000),
    page: text(body.page, 200),
  };
  const digits = lead.phone.replace(/[^\d]/g, '');
  if (lead.name.length < 2) return { error: 'Please enter your name.' };
  if (!EMAIL.test(lead.email)) return { error: 'Please enter a valid work email.' };
  if (digits.length < 10 || digits.length > 15) return { error: 'Please enter a phone number with 10 to 15 digits.' };
  lead.phone = (lead.phone.trim().startsWith('+') ? '+' : '') + digits;
  return { lead };
}

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return Response.json({ error: 'Bad request.' }, { status: 400 }); }
  // Hidden field: people never fill it, bots do. Pretend it worked.
  if (body.website) return Response.json({ ok: true });

  const ip = req.headers.get('cf-connecting-ip') || (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return Response.json({ error: 'Too many requests. Please call us instead.' }, { status: 429 });

  const { lead, error } = check(body);
  if (error) return Response.json({ error }, { status: 400 });

  // Readable one-liner: shows in the admin list and as the Zoho Bigin contact's description.
  const referral = ['Phonology', lead.service, lead.countries && `calls to ${lead.countries}`, lead.minutes, lead.company, lead.page]
    .filter(Boolean).join(' · ').slice(0, 500);
  const utm = body.utm && typeof body.utm === 'object'
    ? Object.fromEntries(Object.entries(body.utm).filter(([k, v]) => /^(utm_[a-z]+|gclid)$/.test(k) && typeof v === 'string').map(([k, v]) => [k, v.slice(0, 200)]))
    : {};
  const details = { company: lead.company, service: lead.service, countries: lead.countries, minutes: lead.minutes, message: lead.message, page: lead.page, ...utm };
  const vars = { name: lead.name, phone: lead.phone, email: lead.email, referral, type: TYPE };

  const send = async (withDetails) => {
    const r = await fetch(GRAPHQL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query: INSERT(withDetails), variables: withDetails ? { ...vars, details } : vars }),
      cache: 'no-store',
    });
    return r.json();
  };

  try {
    let res = await send(true);
    // The `details` column may not exist yet on this Hasura: keep the lead, drop the extras.
    if (res.errors?.some((e) => /details/.test(e.message))) res = await send(false);
    if (res.errors || !res.data?.insert_vocallabs_website_leads_one) {
      console.error('[lead] insert failed', JSON.stringify(res.errors || res));
      return Response.json({ error: 'Could not save your request. Please call or email us.' }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (e) {
    console.error('[lead] insert error', e);
    return Response.json({ error: 'Could not save your request. Please call or email us.' }, { status: 502 });
  }
}
