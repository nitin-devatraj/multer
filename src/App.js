import styles from "./App.module.css";
import BenefitSection from "./components/benefits-section/BenefitSection";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <BenefitSection />
      </section>
    </>
  );
}

export default App;
