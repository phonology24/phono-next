import Link from 'next/link';
import Footer from '@/components/Footer';
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent';
import QuoteSection, { SALES_PHONE, SALES_TEL } from '@/components/QuoteSection';
import AgentDemoButton from '@/components/Home/AgentDemoButton';
import { PAGES } from './pages';
import s from '../../styles/service.module.css';

const SITE = 'https://www.phonology.io';

// "Call centre" -> "call centre" mid-sentence; acronyms (SIP, UIFN, AI) keep their case.
const inSentence = (t) => (t[1] === t[1].toUpperCase() ? t : t[0].toLowerCase() + t.slice(1));

// Phonology's own figures, confirmed by the owner on 2026-11-24.
const STATS = [
  ['100M+', 'Minutes terminated'],
  ['150+', 'Countries connected'],
  ['69', 'Countries with local numbers'],
  ['Up to 60%', 'Lower call costs'],
];

const DEPARTMENTS = [
  ['Sales', [['+91 98459 77788', 'tel:+919845977788'], ['+91 98456 33355', 'tel:+919845633355'], ['info@phonology.io', 'mailto:info@phonology.io']]],
  ['Support', [['+91 99865 09709', 'tel:+919986509709'], ['+91 97404 54742', 'tel:+919740454742'], ['support@phonology.io', 'mailto:support@phonology.io']]],
  ['Billing', [['+91 91085 40675', 'tel:+919108540675']]],
];

function Figure({ page }) {
  if (page.contacts) {
    return (
      <figure className={s.panel} aria-label="Phonology phone numbers and email by team">
        {DEPARTMENTS.map(([team, lines]) => (
          <div key={team} className={s.dept}>
            <span className={s.deptName}>{team}</span>
            <span className={s.deptLines}>
              {lines.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            </span>
          </div>
        ))}
        <p className={s.address}># 2, 2nd Floor, RR Chambers, 11th Main, Millers Road, Bengaluru, Karnataka</p>
      </figure>
    );
  }
  if (page.stats) {
    return (
      <dl className={s.panel}>
        {STATS.map(([n, label]) => (
          <div key={label} className={s.stat}>
            <dt>{label}</dt>
            <dd>{n}</dd>
          </div>
        ))}
      </dl>
    );
  }
  if (page.console) {
    const c = page.console;
    return (
      <figure className={`${s.panel} ${s.console}`} aria-label="A hosted PBX showing extensions in three offices and the menu callers hear">
        <div className={s.consoleTop}>{c.title}</div>
        {c.groups.map(([office, exts]) => (
          <div key={office} className={s.office}>
            <span className={s.officeName}>{office}</span>
            <ul>
              {exts.map(([ext, who, label, state]) => (
                <li key={ext}>
                  <span className={s.ext}>{ext}</span>
                  <span className={s.who}>{who}</span>
                  <span className={s.state} data-state={state}>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={s.ivr}>
          <span className={s.officeName}>Caller menu</span>
          <span className={s.keys}>{c.ivr.map((k) => <span key={k}>{k}</span>)}</span>
        </div>
      </figure>
    );
  }
  return (
    <figure className={s.panel} aria-label={`How it connects: ${page.hops.join(', then ')}`}>
      <ol className={s.hops}>
        {page.hops.map((hop) => <li key={hop}>{hop}</li>)}
      </ol>
    </figure>
  );
}

function Block({ block, ink }) {
  if (block.kind === 'compare') {
    return (
      <section className={`${s.band} ${ink ? `ph-ink ${s.inkBand}` : ''}`}>
        <div className={s.wrap}>
          <h2 className={s.h2}>{block.title}</h2>
          <div className={s.tableWrap}>
            <table className={s.compare}>
              <thead>
                <tr><th scope="col"><span className={s.srOnly}>Topic</span></th>{block.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
              </thead>
              <tbody>
                {block.items.map(([row, ...cells]) => (
                  <tr key={row}><th scope="row">{row}</th>{cells.map((v, i) => <td key={i}>{v}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  const List = block.kind === 'steps' ? 'ol' : 'ul';
  return (
    <section className={`${s.band} ${ink ? `ph-ink ${s.inkBand}` : ''}`}>
      <div className={`${s.wrap} ${block.kind === 'list' ? s.split : ''}`}>
        <div>
          <h2 className={s.h2}>{block.title}</h2>
          {block.intro && <p className={s.sub}>{block.intro}</p>}
        </div>
        <List className={s[block.kind]}>
          {block.items.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </List>
      </div>
    </section>
  );
}

export default function ServicePage({ slug }) {
  const page = PAGES[slug];
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: page.crumb, item: `${SITE}/${slug}` },
      ],
    },
    ...(page.hops
      ? [{ '@context': 'https://schema.org', '@type': 'Service', name: page.crumb, description: page.description, provider: { '@type': 'Organization', name: 'Phonology', url: SITE }, areaServed: 'IN', url: `${SITE}/${slug}` }]
      : []),
    ...(page.faqs.length
      ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]
      : []),
  ];

  return (
    <main className={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <nav aria-label="Breadcrumb" className={s.crumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{page.crumb}</span>
            </nav>
            <h1 className={s.h1}>{page.h1}</h1>
            <p className={s.lede}>{page.lede}</p>
            <div className={s.ctas}>
              {page.demo && <AgentDemoButton />}
              <a className={`ph-btn ${page.demo ? 'ph-btn--secondary' : 'ph-btn--primary'}`} href="#quote">{page.quote[0]}</a>
              {page.contacts
                ? <Link className="ph-btn ph-btn--secondary" href="/contact-us/support">Open the support centre</Link>
                : !page.demo && <a className="ph-btn ph-btn--secondary" href={SALES_TEL}>Call {SALES_PHONE}</a>}
            </div>
          </div>
          <Figure page={page} />
        </div>
      </section>

      {page.blocks.map((block, i) => <Block key={block.title} block={block} ink={i % 2 === 1} />)}

      {page.faqs.length > 0 && (
        <section className={s.band}>
          <div className={`${s.wrap} ${s.split}`}>
            <h2 className={s.h2}>Questions about {page.faqAbout ?? inSentence(page.crumb)}</h2>
            <div className={s.faq}>
              {page.faqs.map(([q, a]) => (
                <div key={q} className={s.qa}>
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <QuoteSection title={page.quote[0]} lead={page.quote[1]} />

      {page.directory && (
        <section className={s.band}>
          <div className={s.wrap}>
            <PhoneNumbers />
          </div>
        </section>
      )}

      <div className={s.wrap}>
        <Footer />
      </div>
    </main>
  );
}
