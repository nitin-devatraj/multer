import React from "react";
import AppointmentForm from "./appointment-form/AppointmentForm";
import BenefitSection from "./benefits-section/BenefitSection";
import styles from "./BenefitAndAppointment.module.css";

function BenefitAndAppointment() {
  return (
    <section className={styles.wrapper}>
      <BenefitSection />
      <AppointmentForm />
    </section>
  );
}

export default BenefitAndAppointment;
