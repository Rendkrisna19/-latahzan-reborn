import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Team from "./pages/Team";
import Schedule from "./pages/Schedule";
import Media from "./pages/Media";
import Corp from "./pages/Corp";
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import Partner from "./components/Partner";
import Game from "./pages/Game";
import Training from "./pages/Training"


const App = () => { 
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Halaman utama yang memuat Hero, Partner*/}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              {/* <Partner /> */}
              
            </>
          }
        />
        <Route path="/Team" element={<Team />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/Training" element={<Training />} /> 
        <Route path="/game" element={<Game />} /> 
        <Route path="/Media" element={<Media />} />
        <Route path="/Corp" element={<Corp />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Contact Us" element={<ContactUs />} />
        
      </Routes>
    </Router>
  );
};

export default App;
