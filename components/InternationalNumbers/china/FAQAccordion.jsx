"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName="China"
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
<KeyboardArrowDownIcon/>What types of Chinese phone numbers can I get?
          </div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p className="accordionP1">You can select local China phone numbers to build a local presence or opt for toll-free numbers to offer customers a free way to contact your business.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Pricing"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>Will i be able to use a a China virtual number if my business is based outside of China?
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>Yes! Phonology’s China virtual numbers can be used globally, enabling you to create a local presence in China without needing a physical office in the country.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>What features come with a China virtual number?
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>Your China virtual number comes equipped with essential features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more to ensure smooth and professional communication with your customers.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/> How fast can I set up my China virtual number?
</div>
        }
        className="accordionItem1"  
      >
        <div className="accordionContent1">
          <p>The setup process is fast and easy. Once you've selected your number, completed the registration, and chosen your plan, your China phone number will be activated within a few minutes.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/>Can my virtual phone system grow with my business?
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>Absolutely! Phonology’s virtual phone system is designed to grow alongside your business. You can easily add additional China numbers or new lines as your business expands, without needing extra infrastructure.</p>
        </div>
      </AccordionItem>
    </Accordion>
  </>
  );
};

export default FAQAccordionComponent;
