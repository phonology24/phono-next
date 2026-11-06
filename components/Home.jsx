"use client";
import React, { useState } from "react";
import Link from "next/link";
import DialpadRounded from "@mui/icons-material/DialpadRounded";
import HubRounded from "@mui/icons-material/HubRounded";
import GraphicEqRounded from "@mui/icons-material/GraphicEqRounded";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Home/Testimonial";
import PhoneNumbers from "./InternationalNumbers/GetInternationalNumbersComponent";
import Hero, { DEMO_FORM } from "./Home/Hero";
import s from "../styles/home.module.css";

const STATS = [
  ["100M+", "Minutes terminated"],
  ["150+", "Countries connected"],
  ["69", "Countries with local numbers"],
  ["Up to 60%", "Lower call costs"],
];

const PILLARS = [
  {
    name: "Numbers",
    Icon: DialpadRounded,
    text: "Local, toll-free and UIFN numbers in 69 countries, live on our network and ready for an agent.",
    links: [
      ["Virtual phone numbers", "/virtual-phone-number-providers"],
      ["Toll-free & UIFN", "/uifn-number"],
      ["Get a number", "/get-phone-numbers"],
    ],
  },
  {
    name: "Voice network",
    Icon: HubRounded,
    text: "SIP trunking, cloud telephony and hosted PBX that carry every call your agents and your people make.",
    links: [
      ["SIP trunking", "/sip-trunk-providers"],
      ["Cloud telephony", "/cloud-telephony-providers"],
      ["Hosted PBX", "/hosted-pbx-providers"],
      ["Call center", "/call-center-solution"],
      ["Unified communications", "/unified-communication-providers"],
    ],
  },
  {
    name: "AI agents",
    Icon: GraphicEqRounded,
    text: "Voice agents that answer, qualify and act, with a Voice API to build on and WhatsApp to follow up.",
    links: [
      ["AI voice agents", "/ai-voice-agents"],
      ["Voice API", "/voice-api"],
      ["WhatsApp Business API", "/whatsapp-business"],
      ["Messaging", "/messaging-services"],
    ],
  },
];

const CODE = `import { VocalCallSDK } from "vocal-call-sdk";

// Put a live voice agent behind a button on any page.
const agent = new VocalCallSDK({
  agentId: "your-agent-id",
  callId: \`call-\${Date.now()}\`,
  container: "#talk-to-ai",
  inactiveText: "Talk to AI",
  activeText: "Listening...",
});

agent.renderButton();
agent.on("onCallEnd", (reason) => console.log("Call ended:", reason));`;

const API_ROWS = [
  ["Call management", "Route, transfer and control live calls with advanced call-handling tools."],
  ["Programmable IVR", "Menus that get callers to the right agent, human or AI, faster."],
  ["Voice transcription", "Every conversation turned into text for records and analysis."],
  ["Real-time analytics", "Track call performance live and see where to improve."],
  ["Global reach", "Local and toll-free numbers to reach customers worldwide."],
  ["Secure and scalable", "Enterprise-grade security that grows with your call volume."],
];

const USE_CASES = [
  ["Inbound", "Customer support", "Routine questions answered on the first ring, so your team handles the complex ones."],
  ["Outbound", "Lead qualification", "Call new leads, qualify them and book the meeting, so reps spend their time closing."],
  ["Inbound", "Appointment booking", "Book, move and confirm appointments on a call, with a WhatsApp confirmation after."],
  ["Inbound", "Order management", "Order status, delivery tracking and returns, handled without a queue."],
  ["Follow-up", "Surveys & feedback", "Automated voice surveys after every interaction, turned into insight you can use."],
  ["Inbound", "After-hours line", "A 24/7 voice that picks up when the office is closed."],
];

const Head = ({ eyebrow, title, sub }) => (
  <div className={`${s.head} ${s.reveal}`}>
    <span className={s.eyebrow}>{eyebrow}</span>
    <h2 className={s.h2}>{title}</h2>
    {sub && <p className={s.sub}>{sub}</p>}
  </div>
);

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const copy = () =>
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  return (
    <button type="button" className={s.copy} onClick={copy}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

const Home = () => (
  <>
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

    <section className={`ph-ink ${s.band}`}>
      <div className={s.wrap}>
        <Head
          eyebrow="The stack"
          title="One network, from dial tone to decision."
          sub="Numbers, routing and agents sit on the same Phonology stack. One bill, one support team, no hand-offs between vendors when a call goes wrong."
        />
        <div className={`${s.pillars} ${s.reveal}`}>
          {PILLARS.map(({ name, Icon, text, links }, i) => (
            <article key={name} className={s.pillar}>
              <div className={s.pillarTop}>
                <span className={s.pill}>{name}</span>
                <span className={s.idx}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <span className={s.pillarIcon}><Icon fontSize="inherit" /></span>
              <p className={s.pillarText}>{text}</p>
              <ul className={s.links}>
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}<span aria-hidden="true">→</span></Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className={s.band}>
      <div className={s.wrap}>
        <div className={s.dev}>
          <div className={s.reveal}>
            <span className={s.eyebrow}>For developers</span>
            <h2 className={s.h2}>Put a live agent on your site with one SDK.</h2>
            <p className={s.sub}>
              The same SDK runs the &ldquo;Talk to our AI&rdquo; button at the top of this page. Install it, pass your
              agent ID, and visitors can talk to your agent from the browser.
            </p>
            <code className={s.install}>npm i vocal-call-sdk</code>
            <Link className={s.more} href="/voice-api">Explore the Voice API <span aria-hidden="true">→</span></Link>
          </div>
          <div className={`ph-ink ${s.code} ${s.reveal}`}>
            <div className={s.codeBar}>
              <span>talk-to-ai.js</span>
              <CopyButton text={CODE} />
            </div>
            <pre>
              {CODE.split("\n").map((line, i) => (
                <span key={i} className={line.trimStart().startsWith("//") ? s.comment : undefined}>
                  {line + "\n"}
                </span>
              ))}
            </pre>
          </div>
        </div>
        <div className={`${s.rows} ${s.reveal}`}>
          {API_ROWS.map(([title, text]) => (
            <div key={title} className={s.row}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={`ph-ink ${s.band}`}>
      <div className={s.wrap}>
        <Head
          eyebrow="Use cases"
          title="Agents that pick up on the first ring."
          sub="Hand the routine calls to an agent that never puts anyone on hold, and keep your people for the conversations that need them."
        />
        <div className={`${s.cases} ${s.reveal}`}>
          {USE_CASES.map(([kind, title, text]) => (
            <article key={title} className={s.case}>
              <span className={s.tag} data-kind={kind}>{kind}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link className={s.more} href="/ai-voice-agents">See AI voice agents <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <div className={s.wrap}>
      <Testimonials />
      <PhoneNumbers />
    </div>

    <section className={`ph-ink ${s.band} ${s.cta}`}>
      <div className={s.shapes} aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className={`${s.wrap} ${s.ctaInner}`}>
        <h2 className={s.h2}>Your next hire answers the phone.</h2>
        <p className={s.sub}>Tell us how your calls flow today. We&apos;ll show you an agent handling them.</p>
        <div className={s.contacts}>
          <a href="mailto:info@phonology.io"><b>Email</b>info@phonology.io</a>
          <a href="tel:+919845977788"><b>Sales</b>+91 98459 77788</a>
        </div>
        <div className={s.ctas}>
          <a className="ph-btn ph-btn--primary" href={DEMO_FORM} target="_blank" rel="noopener noreferrer">Book a demo</a>
          <Link className="ph-btn ph-btn--secondary" href="/contact-us">Contact sales</Link>
        </div>
      </div>
    </section>

    <div className={s.wrap}>
      <Footer />
    </div>
  </>
);

export default Home;
