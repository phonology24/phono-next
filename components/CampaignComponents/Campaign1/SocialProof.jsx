import React from 'react';
import '../../../styles/campaign/socialproof.css';

const testimonials = [
  {
    quote: "Phonology has diverse solutions for their customer needs, their UCaaS deployment has helped our diverse business requirements. UC has helped and improved our productivity 100%.",
    name: "Praveen Prakash",
    company: "Manager at a prominent E-Learning and Online Course Agency"
  },
  {
    quote: "Phonology has been a very reliable partner and their services have helped our business grow & deliver efficiently to our end consumers.",
    name: "Vinod Bhatta",
    company: "Partner at an International Auditing Firm"
  },
  {
    quote: "Phonology has helped us deliver smooth solutions to our onsite offices, we have never felt offshore to our main offices. Phonology helps us connect to every individual instantly on demand.",
    name: "Joseph George",
    company: "Manager Operations of an International Banking Firm"
  }
];

const SocialProof = () => {
  return (
    <div className="social-proof-section">
      <h2 className="social-proof-title">Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="quote-icon">
              <i className="quote-left"></i> {/* Replace with an appropriate quote icon or image */}
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">
              {testimonial.name} <br />
              <span className="testimonial-company">~ {testimonial.company}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="ctasp-button">
        {/* <button>FIND OUT MORE</button> */}
      </div>
    </div>
  );
};

export default SocialProof;
