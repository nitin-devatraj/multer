import styles from "./App.module.css";
import AppointmentForm from "./components/appointment-form/AppointmentForm";
import BenefitSection from "./components/benefits-section/BenefitSection";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <BenefitSection />
        <AppointmentForm />
      </section>
    </>
  );
}

export default App;
