import React from 'react'
import '../../../styles/campaign/companynumbers.css'

const CompanyNumbers = () => {
  return (
    <div class="company-numbers-container">
    <h2 class="company-numbers-heading">Company In Numbers</h2>
    <div class="company-numbers-cards">
        <div class="company-numbers-card">
            <h3 class="card-heading">Minutes terminated</h3>
            <p class="card-paragraph">This is a paragraph for card 1.</p>
        </div>
        <div class="company-numbers-card">
            <h3 class="card-heading">Countries connected</h3>
            <p class="card-paragraph">This is a paragraph for card 2.</p>
        </div>
        <div class="company-numbers-card">
            <h3 class="card-heading">Cost Reduction</h3>
            <p class="card-paragraph">This is a paragraph for card 3.</p>
        </div>
    </div>
    <button class="company-numbers-button">Learn More</button>
</div>

  )
}

export default CompanyNumbers
