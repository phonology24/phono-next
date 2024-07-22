import React from "react";
import "../../styles/testimonial.css";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Praveen Prakash",
      position: "Manager at a prominent E-Learning and Online Course Agency",
      feedback:
      "Phonology has diverse solutions for their customer needs, their UCaaS deployment has helped our diverse business requirements. UC has helped and improved our productivity 100%.",
      backgroundImage: "linear-gradient(158deg, rgba(111,174,226,0.5), rgba(185,146,99,0.6))",
      color: "white",
    },
    {
      name: "Vinod Bhatta",
      position: 
      "Partner at an International Auditing Firm",
      feedback:
        "Phonology has been a very reliable partner and their services have helped our business grow & deliver efficiently to our end consumers.",
      backgroundImage: "linear-gradient(52deg, rgba(222,248,220,0.3), rgba(69,0,239,0.4))",
      color: "white",
    },
    {
      name: "Joseph George",
      position: "Manager Operations of an International Banking Firm",
      feedback:
        "Phonology has helped us deliver smooth solutions to our onsite offices, we have never felt offshore to our main offices. Phonology helps us connect to every individual instantly on demand.",
      backgroundImage: "linear-gradient(77deg, rgba(225,51,101,0.6), rgba(219,143,104,0.7))",
      color: "white",
    },
    {
      name: "Navin Chandra",
      position: "Project Manager at a leading Software Development Firm",
      feedback:
        "I highly recommend Phonology services. They have enabled me & my team to access our international customers efficiently and at all times. We switched to Phonology and our entire workforce is connected seamlessly from various parts of the globe.",
      backgroundImage: "linear-gradient(239deg, rgba(91,46,140,0.6), rgba(229,117,227,0.5))",
      color: "white",
    },
    {
      name: "Ananth Gowda",
      position: "Manager India Operations at an International Recruitment Agency",
      feedback:
        "We are not just clients of Phonology. They partner with us and ensure the smooth running of our business. They provide us with a round-the-clock support system. We have never had to look back ever since we partnered with Phonology.",
      backgroundImage: "linear-gradient(124deg, rgba(46,99,105,0.8), rgba(148,116,234,0.1))",
      color: "white",
    },
    {
      name: "Rajiv",
      position: "IT manager at a leading Healthcare BPO",
      feedback:
        "With Phonology, we always receive 100% quality, consistency, and a complete solution. They always understand our business production and are available for immediate support around the clock. We recommend Phonology to other business enterprises.",
      backgroundImage: "linear-gradient(23deg, rgba(206,113,243,0.1), rgba(31,167,250,0.8))",
      color: "white",
    },
    {
      name: "Thrupti",
      position: "Lead at a Software Company",
      feedback: "They are the best VoIP service providers in Bangalore. They provide immediate support for any queries. They provide good customer support and offer multiple features at an affordable budget. Overall, I would highly recommend Phonology to other businesses.",
      backgroundImage: "linear-gradient(331deg, rgba(226,202,3,0.3), rgba(213,6,95,0.4))",
      color: "white",
    },
  ];

  return (
    <div className="testimonials-container"
>    

      {testimonialsData.map((testimonial, index) => (
        <motion.div
        whileHover={{
            scale: 1.03,
            rotate: 0,
          }}
       
          transition={{
            duration: .1, 
            ease: "easeInOut",
          }}
          key={index}
          className="testimonial-item"
          style={{ backgroundImage: testimonial.backgroundImage }}
        >
          <h3 className="name">{testimonial.name}</h3>
          <p>{testimonial.position}</p>
          <p>{testimonial.feedback}</p>
        </motion.div>
      ))}
    </div>
  );
};
export default Testimonials;
