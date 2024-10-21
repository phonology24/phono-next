"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName = "Denmark";

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
                    aria-label="What types of Denmark phone numbers are available?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What types of {countryName} phone numbers are available?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">You can select between local {countryName} phone numbers, ideal for building a local presence, or toll-free numbers, which provide your customers with a free way to contact you.</p>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    key="2"
                    aria-label="Can I get a Denmark phone number if my business is outside of Denmark?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I get a {countryName} phone number if my business is outside of {countryName}?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Yes! You can use Phonology’s {countryName} virtual numbers from anywhere in the world, giving you the flexibility to establish a local presence in {countryName} without needing a physical office there.</p>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    key="3"
                    aria-label="What features come with a Denmark virtual number?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What features come with a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Your {countryName} phone number includes features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, allowing you to offer superior customer service.</p>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    key="4"
                    aria-label="How fast can I get my Denmark phone number set up?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How fast can I get my {countryName} phone number set up?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>The setup process is simple and fast. After choosing your number, completing registration, and selecting your plan, your {countryName} phone number can be activated within minutes.</p>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    key="5"
                    aria-label="Can I add more virtual numbers as my business grows?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I add more virtual numbers as my business grows?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Absolutely! Phonology’s virtual phone system is built to grow alongside your business. You can easily add more {countryName} numbers or additional lines as your business expands, without the need for extra infrastructure.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
