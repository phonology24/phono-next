import Image from "next/image";
import { flagSrc } from "@/components/numbers/countries";
import { SALES_PHONE, SALES_TEL } from "@/components/QuoteSection";
import s from "../../styles/home.module.css";

// The hero's picture: a SIP trunk's outbound calls from India, as a call board shows them.
const CALLS = [
  ["US", "USA", "+1 (•••) •••-4821", "live", "Connected", "03:12"],
  ["GB", "UK", "+44 •••• ••• 907", "ringing", "Ringing", ""],
  ["AE", "UAE", "+971 •• ••• 3316", "live", "Connected", "01:05"],
  ["AU", "Australia", "+61 ••• ••• 214", "done", "Completed", "06:40"],
  ["CA", "Canada", "+1 (•••) •••-0398", "hold", "On hold", "02:27"],
];

const Hero = () => (
  <section className={s.hero}>
    <div className={`${s.wrap} ${s.heroGrid}`}>
      <div className={s.heroCopy}>
        <h1 className={s.h1}>SIP trunks and international calling for businesses in India</h1>
        <p className={s.lede}>
          Phonology carries your team&apos;s calls to more than 150 countries over SIP, from the PBX, dialler or
          Microsoft Teams you already use. One network, one bill, one support team.
        </p>
        <div className={s.ctas}>
          <a className="ph-btn ph-btn--primary" href="#quote">Get a rate card</a>
          <a className="ph-btn ph-btn--secondary" href={SALES_TEL}>Call {SALES_PHONE}</a>
        </div>
      </div>

      <figure className={s.board} aria-label="Outbound calls from India to five countries on one SIP trunk">
        <div className={s.boardTop}>
          <span>SIP trunk · Bengaluru</span>
          <span className={s.boardFrom}>from +91 80 •••• ••21</span>
        </div>
        <ul className={s.calls}>
          {CALLS.map(([iso, name, num, state, label, time]) => (
            <li key={iso + num}>
              <Image src={flagSrc(iso)} alt="" width={28} height={28} className="ph-flag" priority />
              <span className={s.callWho}>
                <b>{name}</b>
                <span>{num}</span>
              </span>
              <span className={s.state} data-state={state}>{label}</span>
              <span className={s.time}>{time}</span>
            </li>
          ))}
        </ul>
      </figure>
    </div>
  </section>
);

export default Hero;
