import Header from "./components/header/Header";
import CallToAction from "./components/cta-section/CallToAction";
import Testimonial from "./components/testimonials/Testimonial";
import Features from "./components/features/Features";
import About from "./components/about-section/About";
import Footer from "./components/footer/Footer";
import BenefitAndAppointment from "./components/benefits-appointment-section/BenefitAndAppointment";

function App() {
  return (
    <>
      <Header />
      <BenefitAndAppointment />
      <CallToAction />
      <Testimonial />
      <Features />
      <About />
      <Footer />
    </>
  );
}

export default App;
