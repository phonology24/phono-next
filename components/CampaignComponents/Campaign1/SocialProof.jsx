import React from 'react';
import '../../../styles/campaign/socialproof.css';

const testimonials = [
  {
    quote: "A few sentences about your product. How it help to solve clients' problems. It should convince the unconvinced. No fake quotes or photos!",
    name: "Your Customer Name",
    company: "Company"
  },
  {
    quote: "A few sentences about your product. How it help to solve clients' problems. It should convince the unconvinced. No fake quotes or photos!",
    name: "Your Customer Name",
    company: "Company"
  },
  {
    quote: "A few sentences about your product. How it help to solve clients' problems. It should convince the unconvinced. No fake quotes or photos!",
    name: "Your Customer Name",
    company: "Company"
  }
];

const SocialProof = () => {
  return (
    <div className="social-proof-section">
      <h2 className="social-proof-title">TRUST ELEMENTS / SOCIAL PROOF</h2>
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
        <button>FIND OUT MORE</button>
      </div>
    </div>
  );
};

export default SocialProof;
