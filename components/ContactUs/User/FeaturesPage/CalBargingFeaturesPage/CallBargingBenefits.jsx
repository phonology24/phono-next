import React from 'react'

const CallBargingBenefits = () => {
    return (
        <section className="key-benefits-section">
            <h2 className="key-benefits-heading">
                Key Benefits
            </h2>
            <div className="key-benefits-cards-container">
                {/* Card 1 */}
                <div className="key-benefits-card">
                    <div className="key-benefits-card-content">
                        <AccessAlarm className="key-benefits-card-icon" />
                        <h3 className="key-benefits-card-heading">
                            Enhanced Customer Experience

                        </h3>
                        <p className="key-benefits-card-description">
                            Ensure customer concerns are addressed effectively by enabling supervisors to step in and provide immediate support when needed.
                        </p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="key-benefits-card">
                    <div className="key-benefits-card-content">
                        <Speed className="key-benefits-card-icon" />
                        <h3 className="key-benefits-card-heading">
                            Improved Training and Development
                        </h3>
                        <p className="key-benefits-card-description">
                            Train new agents more effectively by monitoring their calls and intervening in real time to demonstrate best practices.

                        </p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="key-benefits-card">
                    <div className="key-benefits-card-content">
                        <ThumbUp className="key-benefits-card-icon" />
                        <h3 className="key-benefits-card-heading">
                            Increased Team Efficiency
                        </h3>
                        <p className="key-benefits-card-description">
                            Resolve issues faster and provide agents with the support they need to handle challenging situations, boosting overall productivity.
                        </p>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="key-benefits-card">
                    <div className="key-benefits-card-content">
                        <Build className="key-benefits-card-icon" />
                        <h3 className="key-benefits-card-heading">

                            Higher Service Quality Assurance

                        </h3>
                        <p className="key-benefits-card-description">
                            Maintain consistent service standards by allowing supervisors to manage and improve live customer interactions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallBargingBenefits
