import React from "react";
import "../../styles/hostedcallcenter.css";
import HostedCallCenterImage from "../../public/Assets/HostedCallCenter.png";
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
Monitor productivity through real-time analytics and scheduled reporting. Gain immediate insights, allowing agile adjustments to enhance workflow and deliver an exceptional customer experience.
        <br></br>{" "}
        Display custom wallboards on your PC or TV monitor for the entire team&apos;s visibility. Monitor essential data sets for your team, including charts, gauges, grids, notes, and even IFrames. Easily share boards with agents, teams, or the entire call center.
      </p>
      </div>
      <div className="hostedCallCenterImage">
        <Image
          src={HostedCallCenterImage}
          alt="Descript"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HostedCallCenterSubHeading;
