import React from 'react';
import './SupportPage.css';

const SupportPage = () => {
  return (
    <div className="supportpage-support-page">
      <div className="supportpage-content-container">
        <h1 className="supportpage-heading">Support</h1>
        <p className="supportpage-paragraph">How can we help you today? Search below to find answers or reach out to us directly.</p>
        <div className="supportpage-search-bar">
          <input
            type="text"
            placeholder="search..."
            className="supportpage-search-input"
          />
          {/* <button className="supportpage-search-button">Search</button> */}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
