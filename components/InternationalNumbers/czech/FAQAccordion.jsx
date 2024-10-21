"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName = "Czech Republic";

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
                    aria-label="What types of Czech Republic phone numbers are available?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What types of {countryName} phone numbers can I purchase?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">You can choose between local {countryName} numbers to establish a local presence or toll-free numbers to provide your customers with a free way to reach your business.</p>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    key="2"
                    aria-label="Can I use a Czech Republic virtual number if my business operates outside of the country?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Is it possible to use a {countryName} virtual number if my business operates outside of the country?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>You can use Phonology’s {countryName} virtual numbers from anywhere in the world, allowing you to establish a local presence without needing a physical office in the country.</p>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    key="3"
                    aria-label="What features are included with a Czech Republic phone number?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What features are included with a {countryName} phone number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Your {countryName} virtual number includes advanced features like call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more to enhance your communication experience.</p>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    key="4"
                    aria-label="How long does it take to set up my Czech Republic phone number?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How long does it take to set up my {countryName} phone number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>The setup process is quick and efficient. Once you’ve selected your number, completed registration, and chosen a plan, your {countryName} phone number can be activated in just a few minutes.</p>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    key="5"
                    aria-label="Can I scale my virtual phone system as my business expands?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I scale my virtual phone system as my business expands?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Definitely! Phonology’s virtual phone system is built to scale with your business. You can easily add additional {countryName} numbers or lines as your business grows, with no need for complex infrastructure.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
