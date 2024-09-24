"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName="Luxembourg"
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
          <p className="accordionP1">You can choose between local {countryName} numbers to establish a local presence or toll-free numbers to allow your customers to contact you free of charge.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Pricing"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>What features come with a {countryName} virtual number?
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>Your {countryName} virtual number includes features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, ensuring smooth and professional communication with your customers.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>How fast can I set up a {countryName} virtual number?
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>The setup process is quick and easy. Once you’ve selected your number, completed registration, and chosen your plan, your {countryName} phone number will be activated within minutes.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>  Can my virtual phone system grow as my business expands?
</div>
        }
        className="accordionItem1"  
      >
        <div className="accordionContent1">
          <p>Absolutely! Phonology’s virtual phone system is built to grow alongside your business. You can easily add more {countryName} numbers or lines as your business grows, without needing additional infrastructure.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>Can I use a {countryName} virtual number if my business operates outside of {countryName}?
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>Yes! Phonology’s {countryName} virtual numbers can be used globally, allowing you to set up a local presence in {countryName} without needing a physical office</p>
        </div>
      </AccordionItem>
    </Accordion>
  </>
  );
};

export default FAQAccordionComponent;
