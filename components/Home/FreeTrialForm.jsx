import React, { useState } from "react";
import Modal from "react-modal";
import styles from '../../styles/App.module.css';
import dotGridImage from "../../public/Assets/dot-grid.webp";
import Image from "next/image";

const FreeTrialForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    contactNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    closeModal();
  };

  return (
    <div>
      <a href="https://zfrmz.in/YvgRqHLcIoEZUB5fd8L8" target="_blank" rel="noopener noreferrer nofollow">
        <button className={styles.bannerButton} >
          Try It Out
        </button>
      </a>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Form Modal"
        className="myFormModal"
      >
        <button onClick={closeModal} className="close-button">
          Close
        </button>

        <div style={{ display: "flex" }} className="freeformheading">
          <div style={{ flex: 1 }} className="dot-image">
            <Image src={dotGridImage} alt="Dot Grid" />
          </div>

          <div style={{ flex: 1 }}>
            <div className="text-trial">
              <h4>You&apos;re likely paying too much for Voice, SMS, and DIDs</h4>
              <h6>
                Let our voice experts conduct a free rate analysis for you. Drop
                your contact details to get started!
              </h6>
            </div>

            <form className="myForm" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="fullName" className="myLabel">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="myInput"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="companyName" className="myLabel">
                  Company Name:
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="myInput"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="contactNumber" className="myLabel">
                  Contact Number:
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="myInput"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="email" className="myLabel">
                  Email ID:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="myInput"
                  required
                />
              </div>

              <button type="submit" className="myButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FreeTrialForm;
