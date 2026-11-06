import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import { VocalCallSDK } from "vocal-call-sdk";
import s from "../../styles/home.module.css";

export const DEMO_FORM = "https://zfrmz.in/Mf9eaR6Y7oP8L83Dx25o";

// ponytail: hardcoded bar heights keep SSR and hydration identical
const BARS = [.35, .6, .9, .55, .75, 1, .5, .8, .4, .65, .95, .7, .45, .85, .6, .3, .7, .9, .5, .75, .4, .6, .85, .55, .35, .7, .5, .3];

const Hero = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const callSDKRef = useRef(null);

  useEffect(() => {
    callSDKRef.current = new VocalCallSDK({
      agentId: "b1372001-c900-4bb6-ad15-a33eab46b3ee",
      callId: "a2bc5b39-00d2-49a6-bca4-ba9dc796d200",
      inactiveText: "Talk to AI",
      activeText: "Listening...",
      size: "medium",
    });
    return () => callSDKRef.current?.destroy();
  }, []);

  const handleCallClick = () => {
    if (!callSDKRef.current) return;
    if (isCallActive) callSDKRef.current.endCall();
    else callSDKRef.current.startCall();
    setIsCallActive(!isCallActive);
  };

  return (
    <section className={s.hero}>
      <div className={`${s.wrap} ${s.heroGrid}`}>
        <div className={s.heroCopy}>
          <span className={s.eyebrow}>AI-first telephony</span>
          <h1 className={s.h1}>Give every phone line an AI agent.</h1>
          <p className={s.lede}>
            Phonology runs the numbers, the SIP trunks and the voice AI on one network. Put an
            agent on any of your lines: it answers, calls out, and follows up on WhatsApp.
          </p>
          <div className={s.ctas}>
            <button className="ph-btn ph-btn--primary" onClick={handleCallClick} aria-pressed={isCallActive}>
              {isCallActive ? "Listening… tap to end" : "Talk to our AI"}
            </button>
            <a className="ph-btn ph-btn--secondary" href={DEMO_FORM} target="_blank" rel="noopener noreferrer">
              Book a demo
            </a>
          </div>
          <p className={s.note}>Live call · uses your microphone</p>
        </div>

        <div className={s.stage} aria-hidden="true">
          <div className={s.orbit} />
          <div className={s.console}>
            <div className={s.consoleTop}>
              <span className={s.live}>AI agent · live</span>
              <span className={s.num}>+91 80 •••• ••21</span>
              <span>02:14</span>
            </div>
            <div className={s.wave}>
              {BARS.map((h, i) => (
                <i key={i} style={{ "--h": h, "--d": `${-i * 0.09}s` }} />
              ))}
            </div>
            <div className={s.line}>
              <span className={s.who}>Caller</span>
              <p>Can I move my appointment to Friday?</p>
            </div>
            <div className={`${s.line} ${s.lineAgent}`}>
              <span className={s.who}>Agent</span>
              <p>Done, Friday at 4:30 PM. I&apos;ve sent the details to your WhatsApp.</p>
            </div>
            <div className={s.tags}>
              <span className={s.tag}>intent: reschedule</span>
              <span className={s.tag}>calendar.update</span>
              <span className={`${s.tag} ${s.tagOk}`}>WhatsApp ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
