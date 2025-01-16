import React from 'react';
import '../VoicemailFeaturesPage/VoiceMailFeaturesHero.css'; // Importing the CSS file for styling
import Image from 'next/image';
import HeroImage from "/public/Assets/home-hero3.png"

const CallBargingFeaturesHero = () => {
  return (
      <div>
              <section className="features-hero">
                <div className="features-hero-container">
                  <div className="features-hero-image">
                    <Image src={HeroImage} alt="Feature" height={1000} width={1000} />
                  </div>
                  <div className="features-hero-content">
                    <h1 className="features-hero-heading">Your Feature Heading Here</h1>
                    <p className="features-hero-paragraph">
                      This is a paragraph describing the feature. Add more details to explain what makes it unique.
                    </p>
                  </div>
                </div>
              </section>
        </div>
  )
}

export default CallBargingFeaturesHero
