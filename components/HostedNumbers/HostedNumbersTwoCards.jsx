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
          <span className="gradient-ltr">Empowering Growth with Our VoIP & UC Platform</span>
        </h2>

        <h3>Streamlined Operations: Quoting, Activate, Billings, and Supporting – All in a Place</h3>
        <p>
        Leave behind the inefficiencies of swivel-chair operations and the challenges of managing loosely integrated systems.
         Embrace a unified solution tailored specifically for MSPs. Provide your customer with a branded cloud PBX service that is easy to set up and manage.
          It is equipped with in-built billing and support tools, putting you firmly in control.
        </p>

      </div>
    </div>
  );
};

export default HostedNumbersTwoCards;
