import React from "react";
import "/components/AIVoice/UseCasesAI.css";
import Image from "next/image";
import image from "../../../../../public/Assets/belgium.png"
const CallRecUseCases = () => {
  return (
 <>
            <h4 className="usecase-h4">
                Use Cases
            </h4>
            <div className="usecase-container">
                <div className="usecase-card">
                    <div className="usecase-header">
                        {/* <h4>Conversational AI</h4> */}
                    </div>
                    <Image className="usecase-image" src={image} alt="Shop" width={500} height={500} />
                    <h3 className="usecase-title">Customer Support Quality Monitoring




                    </h3>
                    <p className="usecase-content">
                    Review recorded calls to evaluate agent performance, ensuring they deliver exceptional service and adhere to company standards.
                    </p>
                </div>
                <div className="usecase-card row">
                    <Image className="usecase-image" src={image} alt="Shop" width={400} height={500} />
                    <div>
                        <div className="usecase-header">
                            {/* <h4>Payment</h4> */}
                        </div>
                        <h3 className="usecase-title">Dispute Management



                        </h3>
                        <p className="usecase-content">
                        Resolve billing disputes, service complaints, or misunderstandings with accurate call records to provide clear evidence.

                        </p>
                    </div>
                </div>
                <div className="usecase-card row">
                    <Image className="usecase-image" src={image} alt="Shop" width={400} height={500} />
                    <div>
                        <div className="usecase-header">
                            {/* <h4>Experience</h4> */}
                        </div>
                        <h3 className="usecase-title">
                        Sales and Lead Analysis


                        </h3>
                        <p className="usecase-content">
                        Analyze recorded sales calls to identify successful techniques, refine sales strategies, and improve conversion rates.
                        </p>
                    </div>
                </div>
                <div className="usecase-card">
                    <div className="usecase-header">
                        {/* <h4>Rating</h4> */}
                    </div>
                    <Image className="usecase-image" src={image} alt="Shop" width={500} height={500} />
                    <h3 className="usecase-title">Regulatory Compliance


                    </h3>
                    <p className="usecase-content">
                    Record and securely store calls for industries such as finance, healthcare, or legal, ensuring adherence to mandatory compliance requirements.                    </p>
                </div>
            </div>
        </>
  )
}

export default CallRecUseCases
