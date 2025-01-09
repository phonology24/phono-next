import React from "react";
import { Home, Info, Settings, Person, ContactMail, Help } from "@mui/icons-material";
import "./QuickFindTopics.css";

const QuickFindTopics = () => {
  const generateUrl = (heading) => {
    return `/${heading.toLowerCase().replace(/\s+/g, '-')}`; // Convert heading to lowercase and replace spaces with hyphens
  };

  return (
    <>
    <h2 className="quick-heading">Quick Find Topics</h2>
    <div className="quickfind-container">
      <div className="quickfind-card">
        <a href={generateUrl("Step by Step Guides")} className="quickfind-link">
          <Home className="quickfind-icon" />
          <h3 className="quickfind-heading">Step by Step Guides</h3>
          <p className="quickfind-subheading">Discover our homepage</p>
        </a>
      </div>
      <div className="quickfind-card">
        <a href={generateUrl("Features Explained")} className="quickfind-link">
          <Info className="quickfind-icon" />
          <h3 className="quickfind-heading">Features Explained</h3>
          <p className="quickfind-subheading">Learn more about us</p>
        </a>
      </div>
      <div className="quickfind-card">
        <a href={generateUrl("Trouble Shooting Scenarios")} className="quickfind-link">
          <Settings className="quickfind-icon" />
          <h3 className="quickfind-heading">Trouble Shooting Scenarios</h3>
          <p className="quickfind-subheading">Manage your preferences</p>
        </a>
      </div>
      <div className="quickfind-card">
        <a href={generateUrl("Case Studies")} className="quickfind-link">
          <Person className="quickfind-icon" />
          <h3 className="quickfind-heading">Case Studies</h3>
          <p className="quickfind-subheading">Edit your profile</p>
        </a>
      </div>

      <div className="quickfind-card">
        <a href={generateUrl("Glossary for Terms")} className="quickfind-link">
          <ContactMail className="quickfind-icon" />
          <h3 className="quickfind-heading">Glossary for Terms</h3>
          <p className="quickfind-subheading">Reach out to us</p>
        </a>
      </div>
      <div className="quickfind-card">
        <a href={generateUrl("FAQs")} className="quickfind-link">
          <Help className="quickfind-icon" />
          <h3 className="quickfind-heading">FAQs</h3>
          <p className="quickfind-subheading">Get assistance</p>
        </a>
      </div>
    </div>
    </>
  );
};

export default QuickFindTopics;
