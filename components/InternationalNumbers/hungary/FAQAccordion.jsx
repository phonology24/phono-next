"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName = "Hungary";
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
                            You can select from local {countryName} numbers to create a local presence or toll-free numbers that allow your customers to reach you without any cost to them.
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label={`Can I use a ${countryName} virtual number even if my business isn’t based in ${countryName}?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Can I use a {countryName} virtual number even if my business isn’t based in {countryName}?
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
                    aria-label={`What features are included with a ${countryName} virtual number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What features are included with a {countryName} virtual number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Your {countryName} virtual number comes equipped with advanced features such as call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, ensuring that your communication is professional and efficient.
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label={`How long does it take to set up my ${countryName} phone number?`}
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How long does it take to set up my {countryName} phone number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>
                            Setting up your {countryName} phone number will be quick and easy. After choosing your number, completing registration, and selecting your plan, your number can be activated within minutes.
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
                            Absolutely! Phonology’s virtual phone system is made to scale with your business. You can easily add additional {countryName} numbers or new lines as your business expands, without needing complex infrastructure.
                        </p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
