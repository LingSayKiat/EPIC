import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { Stats } from "./components/Stats";
import TuitionRates from "./components/OurPrograms/TuitionRates";
import Schedule from "./components/OurPrograms/Schedule";
import { Testimonials } from "./components/AboutUs/Testimonials";
import OurTeam from "./components/AboutUs/OurTeam";

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
          <Route path="/HeroMessage" element={<Navigate replace to="/" />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/OurPrograms" element={<Navigate replace to="/" />} />
          <Route path="/OurPrograms/TuitionRates" element={<TuitionRates />} />
          <Route path="/OurPrograms/Schedule" element={<Schedule />} />
          <Route path="AboutUs" element={<Navigate replace to="/" />} />
          <Route path="/AboutUs/Testimonials" element={<Testimonials />} />
          <Route path="/AboutUs/OurTeam" element={<OurTeam />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
