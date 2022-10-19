import React from "react";

//Global Style
import GlobalStyle from "./styles/GlobalStyle";

//Routes
import { Routes, Route, useLocation } from "react-router-dom";

//Components
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import NavOptions from "./components/nav";
import Admin from "./pages/admin";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import ServiceSection from "./components/serviceSection";
import Footer from "./components/footer";

import ParticlesBackground from "./components/particles";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faReact,
  faSquareGithub,
  faNode,
  faJs,
  faGithub,
  faTwitter,
  faBootstrap,
  faFontAwesome,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGraduationCap,
  faImages,
  faLaptopCode,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faReact,
  faFacebook,
  faLaptopCode,
  faSquareGithub,
  faGraduationCap,
  faImages,
  faNode,
  faJs,
  faGithub,
  faTwitter,
  faEnvelope,
  faBootstrap,
  faDatabase,
  faFontAwesome,
  faPython
);

function App() {
  const location = useLocation();

  return (
    <div>
      <ParticlesBackground />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        {/* <Route path="/dev" element={<ServiceSection />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<Portfolio />} />
        <Route path="/contact" element={<ContactMe />} /> */}
        <Route path="/admin" element={<Admin location={location} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

// <Routes>
//         <Route path="/" element={<AboutMe />} />
//         <Route path="/dev" element={<ServiceSection />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/portfolio/:slug" element={<Portfolio />} />
//         <Route path="/contact" element={<ContactMe />} />
//         <Route path="/admin" element={<Admin location={location} />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register/>} />
//       </Routes>
