import StarField from "./components/StarField";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import CalendarSection from "./components/CalendarSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import CompatExample from "./components/CompatExample";
import ShareExample from "./components/ShareExample";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="yz-page">
      <StarField />
      <div className="yz-page__content">
        <Header />
        <Hero />
        <Showcase />
        <CalendarSection />
        <HowItWorks />
        <Features />
        <CompatExample />
        <ShareExample />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}

export default App;
