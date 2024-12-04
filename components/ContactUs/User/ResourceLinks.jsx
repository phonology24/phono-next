import React from "react";
import "./CombinedLayout.css"; // New CSS file for layout styling

const ResourceLinks = () => {
  const blogLinks = [
    {
      title: "Buy Virtual Numbers to Reduce Costs and Enhance Communication Efficiency Effortlessly",
      url: "https://www.phonology.io/phonology-blogs/buy-virtual-numbers-to-reduce-costs-and-enhance-communication-efficiency-effortlessly.?id=67499f74c376e9a0c38186e3"
    },
    {
      title: "Why Your Business Needs an India VoIP Number for Global Expansion",
      url: "https://www.phonology.io/phonology-blogs/why-your-business-needs-an-india-voip-number-for-global-expansion?id=67037d70c376e9a0c38182ea"
    },
    {
      title: "How US Virtual Numbers Can Help Your Business Establish a Local Presence",
      url: "https://www.phonology.io/phonology-blogs/how-us-virtual-numbers-can-help-your-business-establish-a-local-presence?id=672b596fc376e9a0c38185ba"
    },
    {
      title: "What is SIP Trunk",
      url: "https://www.phonology.io/phonology-blogs/what-is-sip-trunk?id=66b9a028836cc43a91705f94"
    }
  ];

  return (
    <div className="resource-links-container">
      <h2 className="resource-links-heading">Blog Links</h2>
      <div className="resource-cards-container">
        {blogLinks.map((blog, index) => (
          <div key={index} className="resource-card">
            <h3 className="resource-card-title">{blog.title}</h3>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              <button className="read-button">Read</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceLinks;
