"use client";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { VocalCallSDK } from "vocal-call-sdk";

// Starts a live browser call with Phonology's demo voice agent.
export default function AgentDemoButton() {
  const [active, setActive] = useState(false);
  const sdk = useRef(null);

  useEffect(() => {
    sdk.current = new VocalCallSDK({
      agentId: "b1372001-c900-4bb6-ad15-a33eab46b3ee",
      callId: "a2bc5b39-00d2-49a6-bca4-ba9dc796d200",
      inactiveText: "Talk to AI",
      activeText: "Listening...",
      size: "medium",
    });
    return () => sdk.current?.destroy();
  }, []);

  const toggle = () => {
    if (!sdk.current) return;
    if (active) sdk.current.endCall();
    else sdk.current.startCall();
    setActive(!active);
  };

  return (
    <button type="button" className="ph-btn ph-btn--primary" onClick={toggle} aria-pressed={active}>
      {active ? "Listening, tap to end" : "Talk to our AI agent"}
    </button>
  );
}
