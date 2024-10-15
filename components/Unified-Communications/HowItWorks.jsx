import React from "react";
// import "../../styles/unified-communications.css";
import MessageIcon from "@mui/icons-material/Message";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h3 className="how-it-works-heading">How It Works</h3>
      <p className="how-it-works-paragraph">
      Unified Communications platform integrates voice, video, messaging, and collaboration into 
      one seamless cloud-based solution. By connecting SIP trunks and PBX systems, it allows users 
      to communicate effortlessly across any device. Designed for businesses of all sizes, this scalable
       and secure platform ensures efficient and reliable communication, enhancing productivity 
       and collaboration. With Phonology’s cutting-edge technology, your business can stay connected 
       anytime, anywhere, with complete confidence in the performance and security of your communication infrastructure.
                  </p>

      <div
        className="unified-cards-wrapper"
        style={{ justifyContent: "space-between" }}
      >
        {/* Card 1 */}
        <div className="unified-card">
          <MessageIcon style={{ width: "90px", height: "90px" }} />
          <p style={{ fontSize: "24px" }}>Integrated Communications</p>
        </div>

        {/* Card 2 */}
        <div className="unified-card">
          <CallToActionIcon style={{ width: "90px", height: "90px" }} />
          <p style={{ fontSize: "24px" }}>Simple To Use Web Portal</p>
        </div>

        {/* Card 3 */}
        <div className="unified-card">
          <ImportantDevicesIcon style={{ width: "90px", height: "90px" }} />
          <p style={{ fontSize: "24px" }}>Works on Any Device</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
