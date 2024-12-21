
"use client"
import React, { useState } from "react";
import "../../styles/testimonial.css";

const testimonials = [
  {
    quote: "Phonology has diverse solutions for their customer needs, their UCaaS deployment has helped our diverse business requirements. UC has helped and improved our productivity 100%",
    name: "Praveen Prakash",
    title: "Manager at a prominent E-Learning and Online Course Agency",
    image: "/path/to/image1.jpg",
  },
  {
    quote: "Phonology has been a very reliable partner and their services have helped our business grow & deliver efficiently to our end consumers.",
    name: "Vinod Bhatta",
    title: "Partner at an International Auditing Firm",
    image: "/path/to/image2.jpg",
  },
  {
    quote: "Phonology has helped us deliver smooth solutions to our onsite offices, we have never felt offshore to our main offices. Phonology helps us connect to every individual instantly on demand.",
    name: "Joseph George",
    title: "Manager Operations of an International Banking Firm",
    image: "/path/to/image3.jpg",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { quote, name, title, image } = testimonials[currentIndex];

  return (
      <div className="testimonial-section">
      <div className="testimonial-card">
        <h3 className="testimonial-heading">Testimonials</h3>
        <div className="navigation">
          <button className="arrow left-arrow" onClick={prevTestimonial}>
            ←
          </button>
          <div className="pagination">
            {currentIndex + 1} / {testimonials.length}
          </div>
          <button className="arrow right-arrow" onClick={nextTestimonial}>
            →
          </button>
        </div>
        <p className="quote">&rdquo;{quote}&rdquo;</p>
        <div className="profile">
          <div>
            <h4>{name}</h4>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
