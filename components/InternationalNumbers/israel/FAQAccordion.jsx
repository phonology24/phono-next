"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName = "Israel";

    return (
        <>
            <h2 className="faqHeader">Business Phone Number FAQs</h2>
            <Accordion
                variant="splitted" hideIndicator="true"
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
                    aria-label={`What types of ${countryName} phone numbers are available?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon />What types of {countryName} phone numbers are available?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">You can select local {countryName} numbers to create a local presence or opt for toll-free numbers to offer your customers a free and convenient way to reach your business.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="What features come with a {countryName} virtual number?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon />What features come with a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Your {countryName} virtual number includes key features like call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, ensuring smooth and effective communication with your customers.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label={`How quickly can I set up a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon />How quickly can I set up a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>The setup process is fast and simple. Once you’ve chosen your number, completed registration, and selected a plan, your {countryName} phone number can be activated in a matter of minutes.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label="Can my virtual phone system grow as my business expands?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon />Can my virtual phone system grow as my business expands?
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
                    aria-label={`Can I use a ${countryName} virtual number if my business operates outside of ${countryName}?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon />Can I use a {countryName} virtual number if my business operates outside of {countryName}?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Yes! Phonology’s {countryName} virtual numbers can be used globally, allowing you to set up a local presence in {countryName} without needing a physical office.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
