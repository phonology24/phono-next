import React from 'react'
import '../../../styles/campaign/companynumbers.css'

const CompanyNumbers = () => {
    return (
        <div className="company-numbers-container">
            <h2 className="company-numbers-heading">Company In Numbers</h2>
            <div className="company-numbers-cards">
                <div className="company-numbers-card">
                    <h3 className="card-heading">Minutes terminated</h3>
                    <p className="card-paragraph">This is a paragraph for card 1.</p>
                </div>
                <div className="company-numbers-card">
                    <h3 className="card-heading">Countries connected</h3>
                    <p className="card-paragraph">This is a paragraph for card 2.</p>
                </div>
                <div className="company-numbers-card">
                    <h3 className="card-heading">Cost Reduction</h3>
                    <p className="card-paragraph">This is a paragraph for card 3.</p>
                </div>
            </div>
            <button className="company-numbers-button">Learn More</button>
        </div>

    )
}

export default CompanyNumbers
