import React from "react";
import BackImage from "../../public/Assets/empowerpbx.jpg";
import "../../styles/hostedphonenumbers.css";
import { Helmet } from "react-helmet";
import Image from "next/image";
const HostedNumbersTwoCards = () => {
  return (
    <div className="hosted-numbers-two-cards">
      <div className="card-hosted">
        <Image src={BackImage} alt="Card Image" />
      </div>
      <div className="card-hosted">
        <h2>
       Hosted PBX for Multi-Location Businesses
        </h2>
        <p>
          With a Hosted PBX system, managing communication across multiple locations becomes effortless.
          This cloud-based solution centralizes operations, ensuring your entire network stays connected
          and maintains the same service quality across every branch. By moving away from
          on-site hardware, you’ll reduce costs, simplify upkeep, and enjoy the flexibility
          to add new locations seamlessly. Key features like centralized call routing,
          unified messaging, and real-time analytics empower your team to handle multi-location
          interactions with ease, boosting both internal collaboration and customer experience.
          Perfect for growing businesses that need reliable, scalable communication solutions.
        </p>

      </div>
    </div>
  );
};

export default HostedNumbersTwoCards;
