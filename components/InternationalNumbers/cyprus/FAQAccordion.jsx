"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName = "Cyprus";

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
                    aria-label="What types of Cyprus phone numbers are available?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What types of {countryName} phone numbers are available?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">You can choose between local {countryName} numbers for creating a local presence or toll-free numbers for making it easier for customers to contact your business free of charge.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Can I use a Cyprus phone number if my business operates outside of Cyprus?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I use a {countryName} phone number if my business operates outside of {countryName}?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Yes! Phonology’s {countryName} virtual phone numbers can be used from anywhere in the world, enabling you to establish a local presence in {countryName} without needing a physical office there.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="What features are available with the Cyprus phone number?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What features are available with the {countryName} phone number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Your {countryName} virtual number comes equipped with advanced features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more to enhance your customer experience.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label="How quickly can I set up my Cyprus phone number?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How quickly can I set up my {countryName} phone number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>The setup process is quick and efficient. After choosing your number, completing registration, and selecting your plan, your {countryName} phone number can be activated in just a few minutes.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="5"
                    aria-label="Can I expand my virtual phone system as my business grows?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I expand my virtual phone system as my business grows?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Definitely! Phonology’s virtual phone system is designed to scale with your business. You can easily add more {countryName} numbers or additional lines as your business expands without the need for any complicated infrastructure.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
