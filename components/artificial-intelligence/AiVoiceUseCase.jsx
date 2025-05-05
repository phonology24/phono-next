import React from "react";
import "./AiVoiceUseCases.css";   // make sure this path is correct for your setup!

const useCases = [
  {
    title: "Customer Service Automation",
    description:
      "Automate customer-service operations so human agents can focus on complex issues while the AI Voice Agent handles routine inquiries."
  },
  {
    title: "Sales Support",
    description:
      "Automate lead qualification, follow-ups, and appointment scheduling. Free your reps to concentrate on closing deals."
  },
  {
    title: "Order Management",
    description:
      "Let the AI Voice Agent manage order inquiries, delivery tracking, and returns—keeping customers informed every step of the way."
  },
  {
    title: "Survey & Feedback Collection",
    description:
      "Gather post-interaction feedback through automated voice surveys and turn insights into better products and services."
  }
];

const AiVoiceUseCases = () => (
  <section className="usecases">
    <h2 className="usecases-heading">
      Use Cases for Phonology’s AI&nbsp;Voice&nbsp;Agents
    </h2>

    <div className="usecases-grid">
      {useCases.map(({ title, description }, idx) => (
        <article className="usecase-card" key={title}>
          <span className="usecase-number">{idx + 1}</span>
          <h3 className="usecase-title">{title}</h3>
          <p className="usecase-desc">{description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default AiVoiceUseCases;
