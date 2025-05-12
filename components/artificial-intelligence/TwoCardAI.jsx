// components/TwoCardAi.jsx
import React from "react";
import Image from "next/image";
import BackImage from "../../public/Assets/agent2.png";
import "./twoCardAi.css";   // ← new stylesheet

const TwoCardAi = () => (
  <section className="two-card-ai">
    {/* Left – image */}
    <div className="two-card-ai__image">
      <Image src={BackImage} alt="Phonology AI Voice Agent" priority />
    </div>

    {/* Right – text */}
    <div className="two-card-ai__content">
      <h2>Key Features of Phonology’s AI Voice Agents</h2>

      <h3>Advanced Natural Language Processing (NLP)</h3>
      <p>
        Our AI Voice Agents leverage state-of-the-art NLP to understand
        and respond naturally—so customers never have to repeat themselves,
        making every interaction effortless and enjoyable.
      </p>

      <h3>Smart Call Routing</h3>
      <p>
        Intelligent routing directs each call to the right team or agent
        based on real-time intent detection, reducing wait times and
        resolving issues faster.
      </p>

      <h3>Integration with Existing Systems</h3>
      <p>
        Seamlessly connect with your CRM, ERP, and other business tools so
        every interaction is captured, synchronized, and followed up without
        manual effort.
      </p>

      <h3>Real-Time Analytics and Insights</h3>
      <p>
        Monitor calls as they happen, uncover customer pain points, and track
        key metrics—empowering data-driven decisions that boost service
        quality and growth.
      </p>
    </div>
  </section>
);

export default TwoCardAi; 
