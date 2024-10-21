"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    const countryName = "Portugal";

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
                            <KeyboardArrowDownIcon />
                            What types of {countryName} phone numbers are available?
                        </div>
                    }
                    className="accordionItem1" 
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">
                            You can choose between local {countryName} numbers to establish a local presence or toll-free numbers to provide customers with a free way to contact your business.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="2"
                    aria-label={`What features come with a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon />
                            What features come with a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1" 
                >
                    <div className="accordionContent1">
                        <p>
                            Your {countryName} virtual number includes advanced features like call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, helping you streamline communication with customers.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="3"
                    aria-label={`How fast can I set up a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon />
                            How fast can I set up a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1" 
                >
                    <div className="accordionContent1">
                        <p>
                            Setting up your {countryName} virtual number is quick and easy. Once you’ve selected your number, completed the registration, and chosen a plan, your phone number can be activated in just a few minutes.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="4"
                    aria-label={`Can my virtual phone system grow as my business expands?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon />
                            Can my virtual phone system grow as my business expands?
                        </div>
                    }
                    className="accordionItem1"  
                >
                    <div className="accordionContent1">
                        <p>
                            Absolutely! Phonology's virtual phone system will grow with your business. You can easily add more {countryName} numbers or additional lines as your business expands, without the need for additional infrastructure.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="5"
                    aria-label={`Can I use a ${countryName} virtual number if my business operates outside ${countryName}?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon />
                            Can I use a {countryName} virtual number if my business operates outside {countryName}?
                        </div>
                    }
                    className="accordionItem1" 
                >
                    <div className="accordionContent1">
                        <p>
                            Yes! Phonology’s {countryName} virtual numbers enable you to create a local presence in {countryName} from anywhere globally, eliminating the need for a physical office.
                        </p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
