import React from "react";
import "../../../styles/internationalBenefits.css";

const BenefitsOfTurkeyNumber = () => {
  let countryName = "Turkey";

  const benefits = [
    {
      image: "/Assets/blurry-gradient-haikei.png", // Replace with the actual path to your image
      title: "Regional Presence",
      description:
        `Ensure your business is reachable by customers all over ${countryName}, providing seamless connectivity.`,
    },
    {
      image: "/Assets/blurry-gradient-haikei.png",
      title: "Cost Effective",
      description:
        "Reduce costs by eliminating the need for multiple local phone lines and taking advantage of VoIP savings.",
    },
    {
      image: "/Assets/blurry-gradient-haikei.png",
      title: "Improved Quality",
      description:
        "Enhance your customer service with local numbers that customers recognize and trust.",
    },
    {
      image: "/Assets/blurry-gradient-haikei.png",
      title: "Valuable Insights",
      description:
        `Work from anywhere while maintaining a local presence in ${countryName} with a virtual phone number.`,
    },
  ];

  return (
    <div className="BenefitsContainer">
      <div className="benefitsHeaderContainer">
        <h2>Key benefits of {countryName} Virtual Number</h2>
        <p>
          Acquiring a {countryName} virtual phone number grants you a range of
          benefits, including nationwide coverage, lowered expenses, and
          improved customer support.
        </p>
        <button className="benefitsButton">Get A Trial</button>
      </div>
      <div className="BenefitsCardContainer">
        {/* {benefits.map((benefit, index) => (
          <div className="benefitCard" key={index}>
            <div className="imageContainer">
              <img src={benefit.image} alt={benefit.title} />
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>a
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default BenefitsOfTurkeyNumber;