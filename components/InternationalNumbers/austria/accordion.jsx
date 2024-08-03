import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/accordion.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const AustriaAccordionComponent = () => {
    let countryName="Austria"

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion
      variant="splitted"
      className="accordionContainer "
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
        title={
          <div className="accordionItemTitle">
What Is a Austria Virtual Number?
          </div>
        }
        className="accordionItem" indicator={<ArrowDropDownIcon/>}
      >
        <div className="accordionContent">
          <p className="accordionP">{defaultContent}</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Pricing"
        title={
          <div className="accordionItemTitle">
Pricing
          </div>
        }
        className="accordionItem"  indicator={<ArrowDropDownIcon/>}
      >
        <div className="accordionContent">
          <p>{defaultContent}</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Features That Stand Out!"
        title={
          <div className="accordionItemTitle">
            Features That Stand Out!
          </div>
        }
        className="accordionItem"  indicator={<ArrowDropDownIcon/>}
      >
        <div className="accordionContent">
          <p>{defaultContent}</p>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default AustriaAccordionComponent;
