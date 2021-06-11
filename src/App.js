import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Features from "./components/Features/Features";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <div className="Home">
          <Hero />
          <Features />
          <Pricing />
          <Faq />
          <Testimonials />
          <Footer />
        </div>
        <Switch>
          <Route path="/" />
          <Route path="/features" />
          <Route path="/pricing" />
          <Route path="/contact" />
        </Switch>
      </Router>
    </AnimatePresence>
  );
}

export default App;
