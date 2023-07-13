import React from "react";
import styles from "./Features.module.css";
import feature1 from "../../assets/multor-feature1-image.jpg";
import feature2 from "../../assets/multor-feature2-image.jpg";
import feature3 from "../../assets/multor-feature3-image.jpg";

function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.feature_card}>
        <img src={feature1} alt="features" />
        <h4>FEATURE 1</h4>
        <p>
          Talk about some of the details of <br /> your offer with a focus on
          the <br /> value people get back.
        </p>
      </div>
      <div className={styles.feature_card}>
        <img src={feature2} alt="features" />
        <h4>FEATURE 2</h4>
        <p>
          Is there a pain point that your <br /> service resolves? Tell visitors
          <br />
          about it here.
        </p>
      </div>
      <div className={styles.feature_card}>
        <img src={feature3} alt="features" />
        <h4>FEATURE 3</h4>
        <p>
          Alternatively, you could use this <br /> section to address some
          <br />
          frequently asked questions.
        </p>
      </div>
    </section>
  );
}

export default Features;
