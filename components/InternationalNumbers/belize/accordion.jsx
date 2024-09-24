import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/accordion.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DialpadIcon from '@mui/icons-material/Dialpad';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const BelizeAccordionComponent = () => {

    let countryName="Belize"
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
What is {countryName}'s virtual phone number?
          </div>
        }
        className="accordionItem" indicator={<DialpadIcon />}
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
How does an {countryName} virtual phone number work?
          </div>
        }
        className="accordionItem"  indicator={<CurrencyRupeeIcon/>}
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
            Top Features.
          </div>
        }
        className="accordionItem"  indicator={<MilitaryTechIcon/>}
      >
        <div className="accordionContent">
          <p>{defaultContent}</p>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default BelizeAccordionComponent;
