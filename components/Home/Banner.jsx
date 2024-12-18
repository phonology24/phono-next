import React from "react";
import FreeTrialForm from "./FreeTrialForm";
import styles from "../../styles/App.module.css";

const Banner = () => {
  return (
    <div
      className={styles.banner}
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "100px"
      }}
    >
      <div>
        <h4 className={styles.h4banner}>
       Remarkable service standard, dependability, and affordability. Enhancing business communication with reliable, cost-effective, and scalable services and a round-the-clock support system.
        </h4>
      </div>
      <FreeTrialForm />
    </div>
  );
};

export default Banner;
