import styles from "./App.module.css";
import AppointmentForm from "./components/appointment-form/AppointmentForm";
import BenefitSection from "./components/benefits-section/BenefitSection";
import CallToAction from "./components/cta-section/CallToAction";
import Header from "./components/header/Header";
import Testimonial from "./components/testimonials/Testimonial";

function App() {
  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <BenefitSection />
        <AppointmentForm />
      </section>
      <CallToAction />
      <Testimonial />
    </>
  );
}

export default App;
