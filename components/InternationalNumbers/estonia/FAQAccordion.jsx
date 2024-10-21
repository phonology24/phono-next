"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName = "Estonia";
    
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
                    aria-label={`What types of ${countryName} phone numbers can I choose from?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What types of {countryName} phone numbers can I choose from?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">
                            You can select either a local {countryName} phone number, perfect for creating a local presence, or a toll-free number that allows customers to contact you free of charge.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="2"
                    aria-label={`Can I get a ${countryName} virtual number if my business is outside ${countryName}?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I get a {countryName} virtual number if my business is outside {countryName}?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Yes! Phonology’s {countryName} virtual numbers can be used from anywhere in the world, enabling you to establish a local presence in {countryName} without needing a physical office.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="3"
                    aria-label={`What features are included with an ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What features are included with an {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Your {countryName} phone number comes with a range of features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, ensuring you can offer the best customer experience.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="4"
                    aria-label={`How soon can my ${countryName} phone number be activated?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How soon can my {countryName} phone number be activated?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Setting up your {countryName} phone number is fast and easy. After selecting your number, completing registration, and choosing your plan, your number can be activated in just a few minutes.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="5"
                    aria-label={`Can I scale my virtual phone system as my business grows?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I scale my virtual phone system as my business grows?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Absolutely! Phonology’s virtual phone system is designed to grow with your business. You can easily add more {countryName} phone numbers or additional lines as your business expands, without the need for complex infrastructure.
                        </p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
