import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/multor-logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="multer-logo" />
        <h1>
          Describe the
          <br /> value of booking <br />
          an appointment
        </h1>
        <p>
          No need to get clever. Tell people exactly what <br /> you're
          offering, then use this space to <br /> communicate your key value
          proposition.
        </p>
      </div>
    </header>
  );
}

export default Header;
