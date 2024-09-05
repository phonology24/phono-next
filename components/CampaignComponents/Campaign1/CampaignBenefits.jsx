import React from 'react';
import '../../../styles/campaign/campaignbenefits.css';
import benefitImage from '../../../public/Assets/benefits.png'; // Update the path as per your setup
import Image from 'next/image';

const benefits = [
  {
    title: "Cost Efficiency",
    description: "Slash your communication costs with Phonology's VoIP, delivering top-tier service without the hefty price tag—boost your bottom line effortlessly.",
    color: "#FFE081"
  },
  {
    title: "Scalability",
    description: "As your business grows, your phone system grows too. Phonology's VoIP scales with you, allows you to add features and lines without stressing about the infrastructure.",
    color: "#D3A3FF"
  },
  {
    title: " Flexibility",
    description: "Stay connected without a hitch. Phonology’s robust network ensures your calls are always on, so your business never misses a beat.",
    color: "#97E5D5"
  },
  {
    title: "Enhanced Call Quality",
    description: "Say goodbye to static and dropped calls. With Phonology's VoIP, every conversation is crystal clear, ensuring your professionalism shines through.",
    color: "#97DFFB"
  },
  {
    title: "Global Reach",
    description: "Go global without boundaries. Phonology’s international virtual numbers put your business on the map, making it easy to connect with clients anywhere.",
    color: "#97DFFB"
  },
  {
    title: "Advanced Features",
    description: "Unlock a suite of powerful tools like call forwarding and auto-attendant, turning your phone system into a productivity powerhouse with Phonology's VoIP.",
    color: "#97DFFB"
  },
  // {
  //   title: "Easy Integration",
  //   description: "Seamlessly blend Phonology's VoIP with your existing CRM and business tools, creating a unified communication ecosystem that works smarter, not harder.",
  //   color: "#45D534"
  // },
  // {
  //   title: "Reliability",
  //   description: "Stay connected without a hitch. Phonology’s robust network ensures your calls are always on, so your business never misses a beat.",
  //   color: "#536537"
  // }
];

const BenefitsComponent = () => {
  return (
    <div className="benefits-section">
      <div className="benefits-image">
        <Image src={benefitImage} alt="Benefit"  width={1000} height={1000}/>
      </div>
      <div className="benefits-list">
        <h2>Benefits</h2>
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="benefit-circle" style={{ backgroundColor: benefit.color }}></div>
            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsComponent;
