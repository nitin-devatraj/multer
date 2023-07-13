import React from "react";
import styles from "./Testimonials.module.css";
import testimonialStar1 from "../../assets/multor-testimonial1-stars.svg";
import testimonialStar2 from "../../assets/multor-testimonial2-stars.svg";
import testimonialHeadShot1 from "../../assets/multor-testimonial1-headshot.jpg";
import testimonialHeadShot2 from "../../assets/multor-testimonial2-headshot.jpg";

function Testimonial() {
  return (
    <section className={styles.section}>
      <p className={styles.cta}>DON'T JUST TAKE OUR WORD FOR IT</p>
      <div className={styles.card}>
        <div className={styles.testimonialCard}>
          <img src={testimonialStar1} alt="testimonial-rating" />
          <p>
            Share a real testimonial that <br /> hits some of your benefits (but
            <br /> isn't too sales-y).
          </p>
          <div className={styles.customer_details}>
            <img src={testimonialHeadShot1} alt="testimonial-head-shot" />
            <div>
              <p>Real Name</p>
              <p>Location</p>
            </div>
          </div>
        </div>
        <div className={styles.testimonialCard}>
          <img src={testimonialStar2} alt="testimonial-head-shot" />
          <p>
            Include someone talking about <br /> how easy it was to sign up{" "}
            <br /> and participate.
          </p>
          <div className={styles.customer_details}>
            <img src={testimonialHeadShot2} alt="" />
            <div>
              <p>Real Name</p>
              <p>Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
