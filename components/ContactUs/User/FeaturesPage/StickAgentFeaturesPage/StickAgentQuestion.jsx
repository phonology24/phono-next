import React from 'react';
import '../VoicemailFeaturesPage/FAQSection.css'; // Importing the CSS file for styling
const StickAgentQuestion = () => {
    return (
        <div>
            <section className="faq-section">
                <div className="faq-container">
                    <h2 className="faq-question">
                        Why Do You Need Sticky Agent from Phonology?
                    </h2>
                    <p className="faq-answer">
                        Sticky Agent ensures a personalized customer experience
                        by connecting repeat callers to the same agent they
                        interacted with before. This builds stronger relationships,
                        reduces resolution times, and eliminates the need for
                        callers to repeat their issues.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default StickAgentQuestion
