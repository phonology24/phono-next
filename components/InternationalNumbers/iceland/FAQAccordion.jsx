"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName = "Iceland";

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
                        <p className="accordionP1">
                            You can choose between local {countryName} numbers to establish a local presence or toll-free numbers that allow your customers to contact you without incurring any costs.
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label={`Can I use an ${countryName} virtual number even if my business is based outside of ${countryName}?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I use an {countryName} virtual number even if my business is based outside of {countryName}?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Yes! Phonology’s {countryName} virtual numbers can be used from anywhere in the world, allowing you to establish a local presence in {countryName} without needing a physical office.
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label={`What features come with an ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What features come with an {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Your {countryName} virtual number includes features like call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, enabling seamless and professional communication with your customers.
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label={`How long does it take to set up my ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How long does it take to set up my {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Setting up your {countryName} phone number is fast and simple. After selecting your number, completing the registration, and choosing your plan, your number can be activated in just a few minutes.
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="5"
                    aria-label={`Will my virtual phone system grow as my business expands?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Will my virtual phone system grow as my business expands?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Absolutely! Phonology’s virtual phone system is designed to grow with your business. You can easily add additional {countryName} numbers or new lines as your business expands, without the need for extra physical infrastructure.
                        </p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
