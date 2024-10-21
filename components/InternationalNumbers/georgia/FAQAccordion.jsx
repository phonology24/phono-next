"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    const countryName = "Georgia";

    return (
        <>
            <h2 className="faqHeader">Business Phone Number FAQs</h2>
            <Accordion
                variant="splitted"
                hideIndicator={true}
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
                    aria-label={`What types of ${countryName} phone numbers can I purchase?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What types of {countryName} phone numbers can I purchase?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">You can choose from local {countryName} phone numbers to establish a local presence or toll-free numbers that provide customers with an easy and cost-free way to contact your business.</p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="2"
                    aria-label={`Can I use a ${countryName} virtual number if my business operates outside ${countryName}?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I use a {countryName} virtual number if my business operates outside of {countryName}?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Yes! Phonology’s {countryName} virtual numbers can be used from anywhere in the world, enabling you to establish a local presence in {countryName} without needing a physical office.</p>
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
                        <p>Your {countryName} phone number includes features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, allowing you to offer efficient and professional customer service.</p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    key="4"
                    aria-label={`How quickly can a ${countryName} phone number be set up?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How quickly can a {countryName} phone number be set up?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Setting up your {countryName} phone number is quick and straightforward. After selecting your number, completing the registration, and choosing your plan, your number can be activated in just a few minutes.</p>
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
                        <p>Absolutely! Phonology’s virtual phone system is built to grow alongside your business. You can easily add additional {countryName} numbers or new lines as your business expands, without the need for additional infrastructure.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
