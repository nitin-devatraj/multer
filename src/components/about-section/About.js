import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../assets/multor-about.jpg";

function About() {
  return (
    <section className={styles.section}>
      <img src={aboutImage} alt="about" />
      <div>
        <p>ABOUT</p>
        <h3>
          Some more <br /> information about <br />
          your business
        </h3>
        <p>
          Share a little about yourself as a business owner, <br /> or maybe
          describe what makes your service <br /> unique. Give visitors one more
          reason to care <br />
          about your offer and want to work with you.
        </p>
      </div>
    </section>
  );
}

export default About;
