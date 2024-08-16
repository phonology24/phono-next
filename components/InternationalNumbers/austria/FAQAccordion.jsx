"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const FAQAccordionComponent = () => {
    let countryName="Austria"
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (<>

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
<KeyboardArrowDownIcon/> Question 1
          </div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p className="accordionP1">{defaultContent}</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Pricing"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/> Question 2
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>{defaultContent}</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/> Question 3
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>{defaultContent}</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/> Question 4
</div>
        }
        className="accordionItem1"  
      >
        <div className="accordionContent1">
          <p>{defaultContent}</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle1">
<KeyboardArrowDownIcon/> Question 5
</div>
        }
        className="accordionItem1" 
      >
        <div className="accordionContent1">
          <p>{defaultContent}</p>
        </div>
      </AccordionItem>
    </Accordion>
  </>
  );
};

export default FAQAccordionComponent;
