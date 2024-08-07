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
      Partners have the flexibility to create and tailor quotes for their customized UCaaS service.
            <br></br>
            Customers can review and approve quotes through a branded web page.
            <br></br>
            An activation wizard automatically creates customer profiles, sets up services, and applies subscription and one-time charges based on quote specifics.
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
