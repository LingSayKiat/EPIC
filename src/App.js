import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Stats from "./components/Stats";
import About from "./components/AboutUs/AboutUs";
import TuitionRates from "./components/AboutUs/TuitionRates";
import { Schedule } from "./components/AboutUs/Schedule";
import Testimonials from "./components/AboutUs/Testimonials";
import OurTeam from "./components/AboutUs/OurTeam";
import OurPrograms from "./components/OurPrograms";
import { FAQPage } from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/AboutUs/TuitionRates" element={<TuitionRates />} />
          <Route path="/AboutUs/Schedule" element={<Schedule />} />
          <Route path="/AboutUs/Testimonials" element={<Testimonials />} />
          <Route path="/AboutUs/OurTeam" element={<OurTeam />} />
          <Route path="/OurPrograms" element={<OurPrograms />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
