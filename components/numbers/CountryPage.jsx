import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent';
import QuoteSection, { SALES_PHONE, SALES_TEL } from '@/components/QuoteSection';
import { countryBySlug, flagSrc } from './countries';
import s from '../../styles/country.module.css';

const SITE = 'https://www.phonology.io';

// "an Austria number", "a UK number": vowels take "an" except names said with a "yoo" sound.
const article = (name) => (/^[AEIO]/.test(name) ? 'an' : 'a');

function faqsFor(c, kind) {
  const list = [
    [
      `Can my team in India answer calls to ${article(c.name)} ${c.name} number?`,
      `Yes. Calls to your +${c.dial} number come over Phonology's network and ring wherever your team works in India: desk phones, mobiles, your PBX or dialler, or Microsoft Teams.`,
    ],
    [
      `Do we need an office in ${c.inText}?`,
      `No physical office is needed. Some countries ask for a local address or business documents before a number goes live; we tell you what ${c.inText} needs when you ask for the number.`,
    ],
    [
      `Can we also call customers in ${c.inText} from India?`,
      `Yes. Phonology's SIP trunks carry outbound calls to more than 150 countries, so the same team can answer ${c.name} calls and call ${c.name} customers back.`,
    ],
    [
      `What does ${article(c.name)} ${kind} cost?`,
      `It depends on the number type and how many minutes you expect. Send the request form and we reply with the rates for ${c.inText}.`,
    ],
  ];
  if (c.tollFree) {
    list.splice(1, 0, [
      'Who pays for calls to a toll-free number?',
      `Callers in ${c.inText} call free. Your business pays for the incoming minutes at the rate on your rate card.`,
    ]);
  }
  return list;
}

export default function CountryPage({ slug }) {
  const c = countryBySlug(slug);
  const kind = c.tollFree ? `${c.name} toll-free number` : `${c.name} number`;
  const faqs = faqsFor(c, kind);
  const masked = c.dial === '1' ? '+1 (•••) •••-••••' : `+${c.dial} •••• ••••`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: c.tollFree ? `${c.name} toll-free virtual number` : `${c.name} virtual phone number`,
      serviceType: 'Virtual phone number',
      areaServed: { '@type': 'Country', name: c.name },
      provider: { '@type': 'Organization', name: 'Phonology', url: SITE },
      url: `${SITE}/${c.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Phone numbers', item: `${SITE}/get-phone-numbers` },
        { '@type': 'ListItem', position: 3, name: c.label, item: `${SITE}/${c.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ];

  return (
    <main className={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <nav aria-label="Breadcrumb" className={s.crumbs}>
              <Link href="/get-phone-numbers">Phone numbers</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{c.label}</span>
            </nav>
            <h1 className={s.h1}>
              {c.tollFree ? `${c.name} toll-free number` : `${c.name} virtual phone number`} for businesses in India
            </h1>
            <p className={s.lede}>
              Customers in {c.inText} dial a local +{c.dial} {c.tollFree ? 'toll-free ' : ''}number. The call
              rings your team in India, on the phones, PBX or dialler you already use.
            </p>
            <div className={s.ctas}>
              <a className="ph-btn ph-btn--primary" href="#quote">Get {article(c.name)} {kind}</a>
              <a className="ph-btn ph-btn--secondary" href={SALES_TEL}>Call {SALES_PHONE}</a>
            </div>
          </div>

          <figure className={s.route} aria-label={`A call from ${c.name} reaching a team in India`}>
            <div className={s.routeHead}>
              <Image src={flagSrc(c.iso)} alt="" width={40} height={40} className="ph-flag" priority />
              <div>
                <span className={s.routeLabel}>Incoming from {c.inText}</span>
                <span className={s.routeNum}>{masked}</span>
              </div>
              <span className={s.ringing}>Ringing</span>
            </div>
            <ol className={s.hops}>
              <li><span>Your {c.tollFree ? 'toll-free' : 'local'} number</span><b>+{c.dial}</b></li>
              <li><span>Phonology network</span><b>SIP</b></li>
              <li><span>Your team in India</span><b>+91</b></li>
            </ol>
            <div className={s.answered}>
              <span className={s.live}>Answered in Bengaluru</span>
              <span className={s.timer}>00:42</span>
            </div>
          </figure>
        </div>
      </section>

      <section className={s.band}>
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <h2 className={s.h2}>Answer {c.name} calls on the phones you have</h2>
            <p className={s.sub}>
              The number lives on Phonology&apos;s network. You choose where its calls ring, and change it any
              time.
            </p>
          </div>
          <ul className={s.answerWays}>
            <li>
              <h3>Desk phones and mobiles</h3>
              <p>Forward calls to your team&apos;s desk phones and mobile numbers in India.</p>
            </li>
            <li>
              <h3>Your PBX or dialler</h3>
              <p>Deliver calls over a SIP trunk to the call centre software your agents log in to.</p>
            </li>
            <li>
              <h3>Microsoft Teams</h3>
              <p>Ring Teams users directly. <Link href="/cloud-telephony-providers">See Teams calling</Link></p>
            </li>
            <li>
              <h3>Menus, recording and voicemail</h3>
              <p>Add an IVR menu, record calls for training and get voicemail when nobody picks up.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={`ph-ink ${s.band} ${s.inkBand}`}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Getting {article(c.name)} {kind}</h2>
          <ol className={s.steps}>
            <li>
              <h3>Ask for the number</h3>
              <p>Tell us the city or number type you want in {c.inText} and roughly how many calls you expect.</p>
            </li>
            <li>
              <h3>Share business details</h3>
              <p>We tell you which documents {c.inText} asks for and check them before the number goes live.</p>
            </li>
            <li>
              <h3>Connect it</h3>
              <p>We connect the number to your phones, PBX, dialler or Teams.</p>
            </li>
            <li>
              <h3>Take calls</h3>
              <p>Customers in {c.inText} call a local number; your team answers from India.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className={s.band}>
        <div className={`${s.wrap} ${s.split}`}>
          <h2 className={s.h2}>Questions about {c.name} numbers</h2>
          <div className={s.faq}>
            {faqs.map(([q, a]) => (
              <div key={q} className={s.qa}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        title={`Get ${article(c.name)} ${kind}`}
        lead={`Send your name, company and work email. Sales replies with the ${c.name} number options and rates for your call volume.`}
      />

      <section className={s.band}>
        <div className={s.wrap}>
          <PhoneNumbers title="Numbers in other countries" except={c.slug} />
        </div>
      </section>

      <div className={s.wrap}>
        <Footer />
      </div>
    </main>
  );
}
