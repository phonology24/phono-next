import s from '../styles/quote.module.css';
import LeadForm from './LeadForm';

export const SALES_PHONE = '+91 98459 77788';
export const SALES_TEL = 'tel:+919845977788';

export default function QuoteSection({ title, lead }) {
  return (
    <section id="quote" className={`ph-ink ${s.quote}`} aria-labelledby="quote-title">
      <div className={s.wrap}>
        <div className={s.copy}>
          <h2 id="quote-title" className={s.h2}>{title}</h2>
          <p className={s.lead}>{lead}</p>
          <dl className={s.contacts}>
            <div>
              <dt>Sales</dt>
              <dd><a href={SALES_TEL}>{SALES_PHONE}</a></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href="mailto:info@phonology.io">info@phonology.io</a></dd>
            </div>
            <div>
              <dt>Office</dt>
              <dd>Millers Road, Bengaluru</dd>
            </div>
          </dl>
          <p className={s.meeting}>
            Prefer a video call? <a href="https://phonology.zohobookings.in/#/phonologybookameeting" target="_blank" rel="noopener noreferrer">Book a meeting with sales</a>
          </p>
        </div>
        <div className={s.form}>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
