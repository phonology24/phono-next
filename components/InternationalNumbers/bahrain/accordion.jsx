import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/accordion.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DialpadIcon from '@mui/icons-material/Dialpad';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const BahrainAccordionComponent = () => {

    let countryName="Bahrain"
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion
      variant="splitted"
      className="accordionContainer"
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
          <div className="accordionItemTitle">
What is {countryName}s virtual phone number?
          </div>
        }
        className="accordionItem" indicator={<DialpadIcon />}
      >
        <div className="accordionContent">
          <p className="accordionP">An {countryName} Virtual Phone Number allows you to create a local presence in {countryName}, ensuring smooth communication without the need for an actual office.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Pricing"
        title={
          <div className="accordionItemTitle">
How does an Bahrain virtual phone number work?
          </div>
        }
        className="accordionItem"  indicator={<CurrencyRupeeIcon/>}
      >
        <div className="accordionContent">
          <p>An {countryName} Virtual Number routes calls to your phone wherever you are, providing effortless communication with Austrian customers from any country.</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle">
            Top Features.
          </div>
        }
        className="accordionItem"  indicator={<MilitaryTechIcon/>}
      >
        <div className="accordionContent">
        <ul>
  <li>SMS Functionality</li>
  <li>Toll-Free Numbers</li>
  <li>Custom Greetings</li>
  <li>Call Recording</li>
  <li>Multi-Device Ringing</li>
  <li>Caller ID Customization</li>
  <li>Time-Based Routing</li>
  <li>International Call Forwarding</li>
</ul>

        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default BahrainAccordionComponent;
