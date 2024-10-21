"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName = "Bulgaria";  // Dynamic country name

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
                    aria-label={`What kinds of ${countryName} phone numbers are available for purchase?`}
                    title={
                        <div className="accordionItemTitle1">
                            What kinds of {countryName} phone numbers are available for purchase?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">You can choose between local {countryName} phone numbers to create a local presence or toll-free numbers to give customers a cost-free way to reach you.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label={`What features come with a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                           What features come with a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Your {countryName} virtual number includes features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more to enhance your customer interactions.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label={`How fast can I set up a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                           How fast can I set up a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>The setup process is quick and easy. After selecting your number, completing registration, and choosing your plan, your {countryName} phone number can be activated within minutes.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label={`Can my virtual phone system grow as my business expands?`}
                    title={
                        <div className="accordionItemTitle1">
                            Can my virtual phone system grow as my business expands?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Absolutely! Phonology’s virtual phone system is built to scale effortlessly. You can easily add more {countryName} numbers or lines as your business grows without any complex setup.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="5"
                    aria-label={`Can I use a ${countryName} virtual number if my business operates outside of ${countryName}?`}
                    title={
                        <div className="accordionItemTitle1">
                           Can I use a {countryName} virtual number if my business operates outside of {countryName}?
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
