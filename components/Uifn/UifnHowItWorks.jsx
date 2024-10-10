import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

const UifnHowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h3 className="how-it-works-heading">Heading</h3>
      <p className="how-it-works-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel est mollis, accumsan justo eu, molestie sem.
       Donec in nibh neque. Praesent eget orci sed nisi molestie scelerisque eget eu velit. Cras enim sem, auctor sed dui ac,
        vehicula pellentesque nibh. Vivamus 
      consectetur odio hendrerit neque consectetur, quis lacinia lorem volutpat. Nam imperdiet risus in sollicitudin vestibulum. Sed eros arc
                  </p>

      <div
        className="unified-cards-wrapper"
        style={{ justifyContent: "space-between" }}
      >
        {/* Card 1 */}
        <div className="unified-card">
          <MessageIcon style={{ width: "90px", height: "90px" }} />
          <p style={{ fontSize: "24px" }}>Lorem Ipsum</p>
        </div>

        {/* Card 2 */}
        <div className="unified-card">
          <CallToActionIcon style={{ width: "90px", height: "90px" }} />
          <p style={{ fontSize: "24px" }}>Lorem Ipsum</p>
        </div>

        {/* Card 3 */}
        <div className="unified-card">
          <ImportantDevicesIcon style={{ width: "90px", height: "90px" }} />
          <p style={{ fontSize: "24px" }}>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default UifnHowItWorks;
