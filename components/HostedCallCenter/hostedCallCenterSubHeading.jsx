import React from "react";
import "../../styles/hostedcallcenter.css";
import HostedCallCenterImage from "../../public/Assets/ccc1.png";
import Image from "next/image";

const HostedCallCenterSubHeading = () => {
  return (
    <div className="hostedCallCenterContainer">
      <div className="hostedCallCenterText">
        <h2 className="hostedCallCenterh2">
          Empower Customers with <br></br>{" "}
          <span className="ltr-gradient">Efficiency & Flexibility.</span>
        </h2>
        <p className="hostedCallCenterP">
          We deliver precision-engineered telecom solutions built for seamless scalability and technical excellence. Our VoIP, SIP trunks, and cloud telephony systems integrate effortlessly with your existing infrastructure, ensuring low-latency, high-reliability communication.
          <br></br>{" "}
          Using advanced routing and load balancing, we maintain peak performance even during high traffic. We prioritize security with end-to-end encryption and multi-layered protocols. Phonology’s solutions automatically scale with your business, optimizing bandwidth and performance in real-time, creating a future-ready communication infrastructure that adapts as you grow.
        </p>
      </div>
      <div className="hostedCallCenterImage">
        <Image
          src={HostedCallCenterImage}
          alt="Descript"
          style={{ width: "100%", height: "auto" , borderRadius:"17px"}}
        />
      </div>
    </div>
  );
};

export default HostedCallCenterSubHeading;
