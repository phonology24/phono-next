import React from 'react'
import '../../../styles/campaign/companynumbers.css'

const CompanyNumbers = () => {
    return (
        <div className="company-numbers-container">
            <h2 className="company-numbers-heading">Company In Numbers</h2>
            <div className="company-numbers-cards">
                <div className="company-numbers-card">
                    <h3 className="card-heading">100+ Million</h3>
                    <p className="card-paragraph">Minutes Terminated</p>
                </div>
                <div className="company-numbers-card">
                    <h3 className="card-heading">150+</h3>
                    <p className="card-paragraph">Countries Connected.</p>
                </div>
                <div className="company-numbers-card">
                    <h3 className="card-heading">60%</h3>
                    <p className="card-paragraph">Cost Reduction.</p>
                </div>
            </div>
            {/* <button className="company-numbers-button">Learn More</button> */}
        </div>

    )
}

export default CompanyNumbers
