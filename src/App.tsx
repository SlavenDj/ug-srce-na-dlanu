import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Impact from "./components/Impact";
import Goals from "./components/Goals";
import Actions from "./components/Actions";
import CTABanner from "./components/CTABanner";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Gallery from "./components/Gallery";
import Volunteer from "./components/Volunteer";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Help from "./components/Help";
import ContactForm from "./components/ContactForm";
import Newsletter from "./components/Newsletter";
import News from "./components/News";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <Impact />
        <Goals />
        <Actions />
        <CTABanner />
        <Team />
        <Partners />
        <Gallery />
        <Volunteer />
        <Testimonials />
        <FAQ />
        <Help />
        <ContactForm />
        <Newsletter />
        <News />
        <Stats />
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}
