"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    const countryName = "Sweden";

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
                            <KeyboardArrowDownIcon /> What types of {countryName} phone numbers are available?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">
                            You can choose between local {countryName} numbers for establishing a strong local presence or toll-free numbers that provide customers with an easy way to contact your business free of charge.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="2"
                    aria-label={`Can I use a ${countryName} virtual number if my business is located outside of ${countryName}?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I use a {countryName} virtual number if my business is located outside of {countryName}?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Yes! Phonology’s {countryName} virtual numbers can be accessed from anywhere in the world, allowing you to build a local presence in {countryName} without needing a physical office.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="3"
                    aria-label={`What features are available with a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What features are available with a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Your {countryName} virtual number comes with key features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, helping you manage communications smoothly and professionally.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="4"
                    aria-label={`How fast can I set up a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How fast can I set up a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            The setup process is quick and straightforward. Once you’ve chosen your number, completed registration, and selected a plan, your {countryName} phone number can be activated within minutes.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="5"
                    aria-label={`Can my virtual phone system scale with my business growth?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can my virtual phone system scale with my business growth?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Absolutely! Phonology’s virtual phone system is designed to grow with your business. You can easily add more {countryName} numbers or additional lines as your business expands without needing complex infrastructure.
                        </p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
