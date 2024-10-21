"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
  let countryName = "Cambodia";

  return (
    <>
      <h2 className="faqHeader">Business Phone Number FAQs</h2>
      <Accordion
        variant="splitted"
        hideIndicator="true"
        className="accordionContainer1"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        <AccordionItem
          key="1"
          aria-label="What types of Cambodia phone numbers are available?"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon /> What types of Cambodia phone numbers are available?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p className="accordionP1">You can select a local Cambodia phone number to build a strong local presence, or opt for a toll-free number to give customers a cost-free way to contact your business.</p>
          </div>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Can I use a Cambodia virtual number if my business operates outside Cambodia?"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon /> Can I use a {countryName} virtual number if my business operates outside of {countryName}?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p>Yes! Phonology’s {countryName} virtual numbers can be used from anywhere in the world, enabling you to establish a local presence in {countryName} without the need for a physical office.</p>
          </div>
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="What features come with a Cambodia virtual number?"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon /> What features come with a {countryName} virtual number?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p>Your {countryName} virtual number includes essential features like call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more to ensure seamless communication with your customers.</p>
          </div>
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="How fast can I set up a Cambodia virtual number?"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon /> How fast can I set up a {countryName} virtual number?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p>The setup process is quick and easy. Once you’ve selected your number, completed registration, and chosen a plan, your {countryName} phone number can be activated in a few minutes.</p>
          </div>
        </AccordionItem>

        <AccordionItem
          key="5"
          aria-label="Will my virtual phone system grow as my business expands?"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon /> Will my virtual phone system grow as my business expands?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p>Absolutely! Phonology’s virtual phone system is designed to scale as your business grows. You can easily add additional {countryName} numbers or lines as your business expands without needing additional infrastructure.</p>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FAQAccordionComponent;
