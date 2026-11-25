"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { flagSrc } from '../numbers/countries';
import "../../styles/dropdownsolutions.css";

// The navbar's Solutions menu: every service page, grouped the way buyers look for them.
const GROUPS = [
  ['Calling', [
    ['SIP trunking', 'Connect your PBX or dialler and call 150+ countries', '/sip-trunk-providers'],
    ['Business VoIP and A-Z routes', 'Office calling plus international routes with caller ID', '/voip-service-providers-in-india'],
    ['Hosted PBX', 'Your phone system in the cloud, for every branch', '/hosted-pbx-providers'],
    ['Call centre telephony', 'Lines, routing and IVR for inbound and outbound teams', '/call-center-solution'],
    ['Microsoft Teams calling', 'Phone numbers in Teams through direct routing', '/cloud-telephony-providers'],
  ]],
  ['Numbers', [
    ['Virtual numbers', 'Local and toll-free numbers in 69 countries', '/virtual-phone-number-providers'],
    ['Buy a number online', 'Pick a number and where its calls go', '/get-phone-numbers'],
    ['UIFN numbers', 'One +800 toll-free number for many countries', '/uifn-number'],
  ]],
  ['AI and messaging', [
    ['AI voice agents', 'Agents that answer and make calls on your numbers', '/ai-voice-agents'],
    ['Voice API', 'Calls, IVR and SMS from your own app', '/voice-api'],
    ['WhatsApp Business API', 'Watel shared inbox, chatbots and catalog', '/whatsapp-business'],
    ['SMS and messaging', 'OTP, alerts and offers over SMS and chat apps', '/messaging-services'],
    ['Unified communications', 'Voice, video and chat on one platform', '/unified-communication-providers'],
  ]],
];

const POPULAR = [
  ['US', 'USA', '/usa-virtual-phone-number'],
  ['GB', 'UK', '/uk-virtual-phone-number'],
  ['CA', 'Canada', '/canada-virtual-phone-number'],
  ['AU', 'Australia', '/australia-virtual-phone-number'],
  ['AE', 'UAE', '/uae-virtual-phone-number'],
  ['SG', 'Singapore', '/singapore-virtual-phone-number'],
];

const SISTER = [
  ['VocalStack', 'https://www.vocalstack.site'],
  ['EazyReach', 'https://www.eazyreach.app'],
  ['Watel', 'https://www.watel.io'],
];

const DropdownMenuProducts = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    if (!open) return;
    const outside = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('mousedown', outside);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', outside); document.removeEventListener('keydown', esc); };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="dropdownContainer" ref={ref}>
      <button
        ref={toggle}
        type="button"
        className="dropdownToggle"
        aria-expanded={open}
        aria-controls="solutions-menu"
        onClick={() => setOpen(!open)}
      >
        Solutions
        <svg className="dropdownCaret" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      {open && (
        <div id="solutions-menu" className="dropdownMenu">
          <div className="menuGroups">
            {GROUPS.map(([group, items]) => (
              <div key={group} className="menuGroup">
                <h2 className="menuGroupTitle">{group}</h2>
                <ul>
                  {items.map(([name, text, href]) => (
                    <li key={href}>
                      <Link href={href} className="menuItem" onClick={close}>
                        <span className="menuItemName">{name}</span>
                        <span className="menuItemText">{text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {group === 'Numbers' && (
                  <div className="menuPopular">
                    <span className="menuGroupTitle">Popular countries</span>
                    <ul>
                      {POPULAR.map(([iso, name, href]) => (
                        <li key={href}>
                          <Link href={href} onClick={close}>
                            <Image src={flagSrc(iso)} alt="" width={20} height={20} className="ph-flag" />
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="menuFoot">
            <span>
              More from Phonology:{' '}
              {SISTER.map(([name, href], i) => (
                <span key={href}>
                  {i > 0 && ' · '}
                  <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
                </span>
              ))}
            </span>
            <Link href="/#quote" className="menuCta" onClick={close}>Get a rate card</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenuProducts;
