import Hero from "./containers/hero/Hero";
import "./App.css";
import "./index.css";
import Footer from "./containers/footer/Footer";
import { useState } from "react";
import Nav from "./containers/nav/Nav";
import About from "./pages/About/About";
import Models from "./pages/models/Models";
import { Route, Routes } from "react-router";
import Review from "./pages/Review/Review";
import Team from "./pages/team/Team";
import ContactField from "./pages/contact/ContactField";

function App() {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  function handleScroll() {
    setScrollEnabled(!scrollEnabled);
  }
  return (
    <div className={`application ${scrollEnabled ? "no-scroll" : "scroll"}`}>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero handleScroll={handleScroll} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Models" element={<Models />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/ContactField" element={<ContactField />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
