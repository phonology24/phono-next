"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName="Bahrain"
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
  <>
    <h2 className="faqHeader">Bussiness Phone Number FAQs</h2>
    <Accordion
      variant="splitted" hideIndicator = "true"
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
        aria-label="What Is a Austria Virtual Number?"
        // isBordered color="transparent"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>What types of {countryName} phone numbers are available?
          </div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p className="accordionP1">You can choose between local Bahrain numbers to create a local presence or toll-free numbers that provide customers with a free way to contact your business.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Pricing"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>Can I use a Bahrain virtual number if my business is based outside of Bahrain?
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>Yes! Phonology’s Bahrain virtual numbers can be used from anywhere in the world, allowing you to establish a local presence in Bahrain without needing a physical office.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>What features come with a Bahrain virtual number?
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>Your Bahrain virtual number includes key features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, ensuring professional and seamless communication with your customers.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/> How fast can I set up my Bahrain virtual number?
</div>
        }
        className="accordionItem1"  
      >
        <div className="accordionContent1">
          <p>The setup process is quick and simple. Once you’ve chosen your number, completed the registration, and selected your plan, your Bahrain phone number can be activated within minutes.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>Can my virtual phone system scale as my business grows?
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>Absolutely! Phonology’s virtual phone system is built to scale with your business. You can easily add additional Bahrain numbers or lines as your business expands without needing any complex infrastructure.</p>
        </div>
      </AccordionItem>
    </Accordion>
  </>
  );
};

export default FAQAccordionComponent;
