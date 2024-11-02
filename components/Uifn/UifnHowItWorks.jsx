import React from "react";
// import MessageIcon from "@mui/icons-material/Message";
// import CallToActionIcon from "@mui/icons-material/CallToAction";
// import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import uifn2Img from '../../public/Assets/uifn2.png';
import Image from "next/image";

const UifnHowItWorks = () => {
  return (
    <div className="how-it-works-container-uifn">
      <div className="text-container-uifn">
        <h3 className="how-it-works-heading-uifn">Enhancing Customer Experience with UIFN Toll-Free Numbers</h3>
        <p className="how-it-works-paragraph-uifn">
          UIFN toll-free numbers put your customers first, offering them a hassle-free way to
          connect with your business from anywhere, without worrying about call charges. A single,
          recognizable number creates trust and ensures seamless access across multiple countries,
          making your business easy to reach. With 24/7 availability and intelligent call routing
          based on time zones or languages, every interaction feels timely and personalized.
          Centralized call management ensures fast responses, reducing wait times and enhancing
          satisfaction. UIFN numbers elevate the customer experience by making communication
          simple, accessible, and reliable—strengthening loyalty with every seamless interaction.
        </p>
      </div>
        <div className="image-container-uifn">
          <Image src={uifn2Img} alt="uifn img" ></Image>
        </div>
    </div>
  );
};

export default UifnHowItWorks;
