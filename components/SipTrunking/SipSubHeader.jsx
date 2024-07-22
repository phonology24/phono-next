// SipSubHeader.js

import React from "react";
import "../../styles/siptrunking.css";
import MessageIcon from "@mui/icons-material/Message";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

const SipSubHeader = () => {
  return (
    <div className="sip-subheader-container">
      <h2 className="sip-subheader-heading">
      Versatile Phone Lines for Every {" "}
  <span className="gradient-ltr">Business Phone </span>Type
</h2>

      <p className="sip-subheader-paragraph">
      SIP trunking acts as the universal dial tone for any phone system. Whether your customer uses an IP-based solution like 3CX or Asterisk,
       or a legacy digital system such as Nortel, Phonology allows you to provide services, manage billing, and offer support—all through a unified platform.
        With internet access in place, consider everything else handled.
      </p>
    </div>
  );
};

export default SipSubHeader;
