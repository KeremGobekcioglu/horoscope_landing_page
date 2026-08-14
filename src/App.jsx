import StarField from "./components/StarField";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import CompatExample from "./components/CompatExample";
import ZodiacStrip from "./components/ZodiacStrip";
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
        <HowItWorks />
        <Features />
        <CompatExample />
        <ZodiacStrip />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}

export default App;
