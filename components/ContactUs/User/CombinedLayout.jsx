import React from "react";
import ResourceLinks from "./ResourceLinks";
import ContactUsCategories from "./ContactUsCategories";
import "./CombinedLayout.css"; // New CSS file for layout styling

const CombinedLayout = () => {
  return (
    <div className="combined-layout">
      <div className="right-section">
        <ContactUsCategories />
      </div>
      <div className="left-section">
        <ResourceLinks />
      </div>
    </div>
  );
};

export default CombinedLayout;
