import Link from "next/link";
import Footer from "@/components/Footer";
import PhoneNumbers from "./InternationalNumbers/GetInternationalNumbersComponent";
import QuoteSection from "./QuoteSection";
import Hero from "./Home/Hero";
import AgentDemoButton from "./Home/AgentDemoButton";
import s from "../styles/home.module.css";

// Phonology's own figures, confirmed real by the owner on 2026-11-24.
const STATS = [
  ["100M+", "Minutes terminated"],
  ["150+", "Countries connected"],
  ["69", "Countries with local numbers"],
  ["Up to 60%", "Lower call costs"],
];

const SERVICES = [
  ["SIP trunking", "Connect your PBX, dialler or call centre software to Phonology for inbound and outbound calls.", "/sip-trunk-providers"],
  ["A-Z international calling", "Call any country from India, priced per minute for each destination you dial.", "#quote"],
  ["Hosted VoIP and PBX", "Extensions, IVR menus and call recording run in Phonology's cloud, no PBX box in the office.", "/hosted-pbx-providers"],
  ["Microsoft Teams calling", "Make and take phone calls in Teams through direct routing.", "/cloud-telephony-providers"],
  ["Call centre telephony", "Lines and routing for inbound and outbound teams of any size.", "/call-center-solution"],
  ["Numbers abroad", "Local and toll-free numbers in 69 countries that ring your team in India.", "/virtual-phone-number-providers"],
];

const BUYERS = [
  ["BPOs and call centres", "Agents dialling the USA, UK, Canada and Australia all day, on the dialler they already log in to."],
  ["Exporters and IT services", "Sales and account teams calling buyers and clients abroad from desk phones or Teams."],
  ["Support for customers abroad", "A local number in each customer's country, answered by your team in India."],
];

const STEPS = [
  ["Send your call mix", "The countries you call and your monthly minutes, as a rough list."],
  ["Get a rate card", "Per-minute rates for those destinations, at your volume."],
  ["Connect your system", "We set up the SIP trunk on your PBX, dialler or Teams."],
  ["Go live", "Calls run on Phonology's network, with one support team for every call."],
];

// Real quotes from Phonology customers (from the earlier site; confirmed 2026-11-24).
const QUOTES = [
  ["Phonology has been a very reliable partner and their services have helped our business grow & deliver efficiently to our end consumers.", "Vinod Bhatta", "Partner at an International Auditing Firm"],
  ["Phonology has helped us deliver smooth solutions to our onsite offices, we have never felt offshore to our main offices. Phonology helps us connect to every individual instantly on demand.", "Joseph George", "Manager Operations of an International Banking Firm"],
  ["Phonology has diverse solutions for their customer needs, their UCaaS deployment has helped our diverse business requirements. UC has helped and improved our productivity 100%", "Praveen Prakash", "Manager at a prominent E-Learning and Online Course Agency"],
];

const FAQS = [
  ["Which countries can we call?", "More than 150, including the USA, UK, Canada, UAE, Australia and Singapore. Send the destinations you call most and we price each one."],
  ["Do we have to replace our PBX or dialler?", "No. Any phone system or dialler that supports SIP connects to a Phonology trunk, and Microsoft Teams connects through direct routing."],
  ["How are calls priced?", "Per minute, by destination. Rates depend on where you call and how many minutes you send, so we quote a rate card for your mix instead of publishing one price list."],
  ["Can customers abroad call us?", "Yes. Take a local or toll-free number in any of 69 countries and answer the calls from India."],
  ["Who do we call when a call fails?", "Phonology's own support team. Numbers, trunks and routing sit on one network, so nobody hands you on to another carrier."],
];

const CODE = `import { VocalCallSDK } from "vocal-call-sdk";

// Put a live voice agent behind a button on any page.
const agent = new VocalCallSDK({
  agentId: "your-agent-id",
  callId: \`call-\${Date.now()}\`,
  container: "#talk-to-ai",
});

agent.renderButton();`;

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
];

const Home = () => (
  <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
    <Hero />

    <div className={s.wrap}>
      <dl className={s.stats}>
        {STATS.map(([n, label]) => (
          <div key={label} className={s.stat}>
            <dt className={s.statLabel}>{label}</dt>
            <dd className={s.statNum}>{n}</dd>
          </div>
        ))}
      </dl>
    </div>

    <section className={s.band}>
      <div className={`${s.wrap} ${s.split}`}>
        <div>
          <h2 className={s.h2}>Voice services Phonology runs</h2>
          <p className={s.sub}>Each one runs on Phonology&apos;s own network, so calls, numbers and support come from one place.</p>
        </div>
        <ul className={s.services}>
          {SERVICES.map(([name, text, href]) => (
            <li key={name}>
              <Link href={href} className={s.service}>
                <span className={s.serviceName}>{name}</span>
                <span className={s.serviceText}>{text}</span>
                <span className={s.go} aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className={`ph-ink ${s.band} ${s.inkBand}`}>
      <div className={s.wrap}>
        <h2 className={s.h2}>Teams in India that call abroad every day</h2>
        <div className={s.path} aria-label="How an outbound call travels: your agents in India, your PBX or dialler, a Phonology SIP trunk, then more than 150 countries">
          {["Your agents in India", "PBX, dialler or Teams", "Phonology SIP trunk", "150+ countries"].map((hop) => (
            <span key={hop} className={s.hop}>{hop}</span>
          ))}
        </div>
        <ul className={s.buyers}>
          {BUYERS.map(([who, text]) => (
            <li key={who}>
              <h3>{who}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className={s.band}>
      <div className={s.wrap}>
        <h2 className={s.h2}>Moving your calls to Phonology</h2>
        <ol className={s.steps}>
          {STEPS.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className={`${s.band} ${s.numbersBand}`}>
      <div className={s.wrap}>
        <PhoneNumbers title="Local and toll-free numbers abroad" />
      </div>
    </section>

    <section className={`ph-ink ${s.band} ${s.inkBand}`}>
      <div className={`${s.wrap} ${s.dev}`}>
        <div>
          <h2 className={s.h2}>AI voice agents on the same lines</h2>
          <p className={s.sub}>
            Put an agent on any Phonology number: it answers, calls out and follows up on WhatsApp. Talk to one in your
            browser, or add the same button to your site with one SDK.
          </p>
          <div className={s.ctas}>
            <AgentDemoButton />
            <Link className="ph-btn ph-btn--secondary" href="/ai-voice-agents">See AI voice agents</Link>
          </div>
          <p className={s.note}>Live call in your browser · uses your microphone</p>
        </div>
        <div className={s.code}>
          <div className={s.codeBar}><span>talk-to-ai.js</span><Link href="/voice-api">Voice API docs</Link></div>
          <pre>
            {CODE.split("\n").map((line, i) => (
              <span key={i} className={line.trimStart().startsWith("//") ? s.comment : undefined}>{line + "\n"}</span>
            ))}
          </pre>
        </div>
      </div>
    </section>

    <section className={s.band}>
      <div className={s.wrap}>
        <h2 className={s.h2}>What customers say about Phonology</h2>
        <ul className={s.quotes}>
          {QUOTES.map(([quote, name, role]) => (
            <li key={name}>
              <blockquote>
                <p>&ldquo;{quote}&rdquo;</p>
                <footer>
                  <b>{name}</b>
                  <span>{role}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className={`${s.band} ${s.faqBand}`}>
      <div className={`${s.wrap} ${s.split}`}>
        <h2 className={s.h2}>Questions buyers ask first</h2>
        <div className={s.faq}>
          {FAQS.map(([q, a]) => (
            <div key={q} className={s.qa}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <QuoteSection
      title="Get a rate card for your destinations"
      lead="Send your name, company and work email. Sales calls you back for the countries you dial and your monthly minutes, then sends rates for that mix."
    />

    <div className={s.wrap}>
      <Footer />
    </div>
  </main>
);

export default Home;
