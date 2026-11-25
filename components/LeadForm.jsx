'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import s from '../styles/leadform.module.css';

const SERVICES = ['SIP trunk', 'International calling (A-Z)', 'Virtual numbers', 'Hosted PBX', 'Call centre telephony', 'AI voice agents', 'Something else'];
const MINUTES = ['Under 10,000 a month', '10,000 to 100,000 a month', '100,000 to 1 million a month', 'Over 1 million a month', 'Not sure yet'];

// Our own quote form: posts to /api/lead, which files it in the VocalLabs leads list.
export default function LeadForm() {
  const router = useRouter();
  const [state, setState] = useState({ busy: false, error: '' });
  const [utm, setUtm] = useState({});

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const found = {};
    for (const [k, v] of q) if (/^(utm_[a-z]+|gclid)$/.test(k)) found[k] = v;
    setUtm(found);
  }, []);

  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState({ busy: true, error: '' });
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...data, page: window.location.pathname, utm }),
      });
      const out = await r.json().catch(() => ({}));
      if (!r.ok || !out.ok) throw new Error(out.error || 'Could not send your request. Please call or email us.');
      router.push('/thank-you');
    } catch (err) {
      setState({ busy: false, error: err.message });
    }
  }

  return (
    <form className={s.form} onSubmit={submit} noValidate={false}>
      <div className={s.row}>
        <label className={s.field}>
          <span>Name</span>
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" />
        </label>
        <label className={s.field}>
          <span>Company</span>
          <input name="company" maxLength={150} autoComplete="organization" />
        </label>
      </div>
      <div className={s.row}>
        <label className={s.field}>
          <span>Work email</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
        <label className={s.field}>
          <span>Phone</span>
          <input name="phone" type="tel" required maxLength={30} autoComplete="tel" placeholder="+91 98765 43210" />
        </label>
      </div>
      <div className={s.row}>
        <label className={s.field}>
          <span>What you need</span>
          <select name="service" defaultValue={SERVICES[0]}>
            {SERVICES.map((v) => <option key={v}>{v}</option>)}
          </select>
        </label>
        <label className={s.field}>
          <span>Call volume</span>
          <select name="minutes" defaultValue={MINUTES[4]}>
            {MINUTES.map((v) => <option key={v}>{v}</option>)}
          </select>
        </label>
      </div>
      <label className={s.field}>
        <span>Countries you call <em>(optional)</em></span>
        <input name="countries" maxLength={200} placeholder="USA, UK, UAE" />
      </label>
      <label className={s.field}>
        <span>Anything else <em>(optional)</em></span>
        <textarea name="message" rows={3} maxLength={2000} />
      </label>
      {/* Bots fill every field; people never see this one. */}
      <label className={s.trap} aria-hidden="true">
        Website <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {state.error && <p className={s.error} role="alert">{state.error}</p>}
      <button type="submit" className="ph-btn ph-btn--primary" disabled={state.busy}>
        {state.busy ? 'Sending…' : 'Get my rate card'}
      </button>
      <p className={s.note}>We use these details only to prepare your quote.</p>
    </form>
  );
}
