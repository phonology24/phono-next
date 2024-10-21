"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
  let countryName = "China";

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
          aria-label="Types of Chinese Phone Numbers"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon />
              What types of Chinese phone numbers are available?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p className="accordionP1">
              You can choose between local numbers to establish a regional presence or toll-free numbers to provide a no-cost option for customers to contact your business.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Global Usage of China Numbers"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon />
              Can I use a Chinese virtual number if my business operates outside China?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p>
              Yes! Phonology’s China virtual numbers can be used globally, allowing your business to maintain a local presence in China, no matter where you're based.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Features of a China Virtual Number"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon />
              What features come with a China virtual number?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p>
              Your China virtual number includes features like call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, ensuring seamless communication with your customers.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="Setup Time for a China Number"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon />
              How quickly can I set up my China virtual number?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p>
              Setting up is fast and simple! Once you’ve selected your number and completed registration, your China virtual number will be activated within minutes.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem
          key="5"
          aria-label="Scalability of Virtual Phone Systems"
          title={
            <div className="accordionItemTitle1">
              <KeyboardArrowDownIcon />
              Can my virtual phone system grow with my business?
            </div>
          }
          className="accordionItem1"
        >
          <div className="accordionContent1">
            <p>
              Absolutely! Phonology’s virtual phone system scales with your business. Add more numbers or lines as needed, without the hassle of extra infrastructure.
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FAQAccordionComponent;
