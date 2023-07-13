import React from "react";
import styles from "./CallToAction.module.css";
import videoThumbnail from "../../assets/video-thumbnail.webp";

function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2>
          Show visitors what <br /> they're signing up for
        </h2>
        <p>
          Include a video or photo from one of your sessions to help people{" "}
          <br />
          understand your service (or just to hype ‘em up).
        </p>
        <img src={videoThumbnail} alt="cta-video" />
      </div>
    </section>
  );
}

export default CallToAction;
