"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import "../../../styles/faqaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQAccordionComponent = () => {
    let countryName = "Croatia";

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
                    aria-label="What kinds of phone numbers are available for purchase in Croatia?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What kinds of phone numbers are available for purchase in Croatia?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p className="accordionP1">Phonology offers both local Croatia numbers, perfect for establishing a local presence, and toll-free numbers, ideal for customer support and inquiries.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Is it possible to use a Croatia phone number if my business operates outside of Croatia?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> Is it possible to use a Croatia phone number if my business operates outside of Croatia?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Yes! You can use Phonology's Croatia virtual phone numbers from anywhere in the world, allowing you to create a local presence without needing a physical office in Croatia.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="What features are available with the Croatia phone number?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> What features are available with the Croatia phone number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Your Croatia phone number comes with a suite of advanced features, including call forwarding, voicemail, IVR (Interactive Voice Response), call recording, and more, ensuring professional customer service.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label="How long does it take to set up my Croatia phone number?"
                    title={
                        <div className="accordionItemTitle1">
                            <KeyboardArrowDownIcon /> How long does it take to set up my Croatia phone number?
                        </div>
                    }
                    className="accordionItem1"
                >
                    <div className="accordionContent1">
                        <p>Setting up your Croatia phone number is fast and easy. After choosing your number, registering, and selecting a plan, you can activate your number within minutes.</p>
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
                        <p>Absolutely! Our virtual phone system is designed to scale with your business. You can easily add more Croatia phone numbers or additional lines as your business expands, with no need for extra physical infrastructure.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default FAQAccordionComponent;
