"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    const countryName = "Slovakia";

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
                    aria-label={`What types of ${countryName} phone numbers are available?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What types of {countryName} phone numbers are available?
                        </div>
                    }
                    className="accordionItem1" 
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">You can choose from local {countryName} numbers to create a strong local presence or toll-free numbers to allow customers to reach your business at no cost.</p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="2"
                    aria-label={`Can I use a ${countryName} virtual number if my business is based outside of ${countryName}?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I use a {countryName} virtual number if my business is based outside of {countryName}?
                        </div>
                    }
                    className="accordionItem1" 
                >
                    <div className="accordionContent1">
                        <p>Yes! Phonology’s {countryName} virtual numbers are accessible from anywhere in the world, allowing you to establish a local presence in {countryName} without requiring a physical office.</p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="3"
                    aria-label={`What features come with a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What features come with a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1" 
                >
                    <div className="accordionContent1">
                        <p>Your {countryName} virtual number comes with features like call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, ensuring professional communication with your customers.</p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="4"
                    aria-label={`How quickly can I set up a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How quickly can I set up a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"  
                >
                    <div className="accordionContent1">
                        <p>The setup process is quick and straightforward. Once you’ve chosen your number, completed the registration, and selected a plan, your {countryName} phone number can be activated within minutes.</p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="5"
                    aria-label={`Can my virtual phone system scale with my business?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can my virtual phone system scale with my business?
                        </div>
                    }
                    className="accordionItem1" 
                >
                    <div className="accordionContent1">
                        <p>Absolutely! Phonology’s virtual phone system is designed to grow with your business. You can easily add more {countryName} numbers or additional lines as your business expands, without needing complex infrastructure.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
