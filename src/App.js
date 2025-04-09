import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { Stats } from "./components/Stats";
import { TuitionRates } from "./components/OurPrograms/TuitionRates";
import { Schedule } from "./components/OurPrograms/Schedule";
import { Gallery } from "./components/AboutUs/Gallery";
import { Testimonials } from "./components/AboutUs/Testimonials";
import OurTeam from "./components/AboutUs/OurTeam";
import { FAQPage } from "./components/FAQ";
import { ContactUsPage } from "./components/ContactUs";
import Enrichment from "./components/OurPrograms/Enrichment";
import Alumind from "./components/OurPrograms/BeyondAcademics/Alumind";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Buttons />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HeroMessage" element={<Navigate replace to="/" />} />
          <Route path="/Stats" element={<Stats />} />
          <Route
            path="/OurPrograms"
            element={<Navigate replace to="/OurPrograms/TuitionRates" />}
          />
          <Route path="/OurPrograms/TuitionRates" element={<TuitionRates />} />
          <Route path="/OurPrograms/Schedule" element={<Schedule />} />
          <Route path="/OurPrograms/Enrichment" element={<Enrichment />} />
          <Route path="/AboutUs" element={<Navigate replace to="/" />} />
          <Route path="/AboutUs/Testimonials" element={<Testimonials />} />
          <Route path="/AboutUs/OurTeam" element={<OurTeam />} />
          <Route path="/AboutUs/Gallery" element={<Gallery />} />
          <Route
            path="/BeyondAcademics"
            element={<Navigate replace to="/BeyondAcademics/Alumind" />}
          />
          <Route path="/BeyondAcademics/Alumind" element={<Alumind />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
