"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    const countryName = "Japan";

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
                        <p>You can choose between local {countryName} numbers to establish a local presence or toll-free numbers to provide customers with an easy and free way to reach your business.</p>
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
                        <p>Yes! Phonology’s {countryName} virtual numbers are accessible from anywhere in the world, allowing you to establish a local presence in {countryName} without needing a physical office.</p>
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
                        <p>Your {countryName} virtual number offers features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, ensuring seamless and professional communication with your customers.</p>
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
                        <p>Setting up your {countryName} phone number is quick and easy. Once you’ve chosen your number, completed registration, and selected a plan, your phone number will be ready in just a few minutes.</p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="5"
                    aria-label={`Can my virtual phone system scale as my business grows?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can my virtual phone system scale as my business grows?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Absolutely! Phonology’s virtual phone system is designed to scale with your business. You can easily add additional {countryName} numbers or lines as your business grows without needing additional infrastructure.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
