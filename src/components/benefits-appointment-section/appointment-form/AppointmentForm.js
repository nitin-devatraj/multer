import React from "react";
import styles from "./AppointmentForm.module.css";

function AppointmentForm() {
  return (
    <form className={styles.form}>
      <div className={styles.cta_wrapper}>
        <h3>
          Schedule an <br /> Appointment
        </h3>
        <p>
          Here, let visitors know what will happen <br /> when they complete
          your form.
        </p>
      </div>
      <div className={styles.input_wrapper}>
        <input type="text" name="fname" placeholder="First name*" />
        <input type="text" name="lname" placeholder="Last name*" />
        <input type="email" name="email" placeholder="Email*" />
        <input type="tel" name="phnumber" placeholder="Phone Number*" />
        <select name="type">
          <option value="type" defaultValue>
            Type Of Appointment
          </option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
          <option value="type3">Type 3</option>
        </select>
        <button>SCHEDULE NOW</button>
      </div>
    </form>
  );
}

export default AppointmentForm;
