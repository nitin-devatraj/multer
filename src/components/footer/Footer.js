import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/multor-footer-logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <img src={logo} alt="logo" />
        <p>© 2020 Insert Name Here. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
