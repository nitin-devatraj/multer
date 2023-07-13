import React from "react";
import styles from "./BenefitSection.module.css";
import BenefitsIcon1 from "../../assets/multor-benefit1-icon.svg";
import BenefitsIcon2 from "../../assets/multor-benefit2-icon.svg";
import BenefitsIcon3 from "../../assets/multor-benefit3-icon.svg";

function BenefitSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <img src={BenefitsIcon1} alt="benefits-icon-1" />
        <h4>Benefit 1</h4>
      </div>
      <p>
        Highlight the benefits of signing up for an <br /> appointment, online
        class, or video consultation.
      </p>
      <div className={styles.wrapper}>
        <img src={BenefitsIcon2} alt="benefits-icon-2" />
        <h4>Benefit 2</h4>
      </div>
      <p>
        For example, fitness instructors might describe how <br /> their
        routines make people healthier *and* happier.
      </p>
      <div className={styles.wrapper}>
        <img src={BenefitsIcon3} alt="benefits-icon-3" />
        <h4>Benefit 3</h4>
      </div>
      <p>
        Remind visitors how easy it is to claim your offer <br /> and start
        enjoying the benefits.
      </p>
    </section>
  );
}

export default BenefitSection;
