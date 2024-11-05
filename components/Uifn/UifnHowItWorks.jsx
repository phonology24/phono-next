import React from "react";
import uifn2Img from '../../public/Assets/uifn2.png';
import Image from "next/image";

const UifnHowItWorks = () => {
  return (
    <div className="how-it-works-container-uifn">
      <div className="text-container-uifn">
        <h3 className="how-it-works-heading-uifn">Guide to Activating Your UIFN Numbers Across Countries:
        </h3>
        <p className="how-it-works-paragraph-uifn">
        <ul>
    <li><b>Register with the ITU</b>: Start your UIFN journey by applying through an authorized provider that collaborates with the International Telecommunication Union (ITU) for registration.</li>
    <li><b>Choose Your Target Markets</b>: Decide which countries you want your UIFN to cover, prioritizing regions essential to your business.</li>
    <li><b>Comply with Local Telecom Requirements</b>: Work alongside your provider to meet each country regulations, ensuring smooth approval and setup.</li>
    <li><b>Activate and Test Your UIFN</b>: Once your UIFN is ready, activate it and run thorough tests to guarantee seamless access for customers in each selected country.</li>

</ul>

        </p>
      </div>
        <div className="image-container-uifn">
          <Image src={uifn2Img} alt="uifn img" ></Image>
        </div>
    </div>
  );
};

export default UifnHowItWorks;
