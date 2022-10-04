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
import Admin from "./pages/admin/homeAdmin";
import Login from "./components/login";

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
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGraduationCap,
  faImages,
  faLaptopCode,
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
  faEnvelope
);

function App() {
  const location = useLocation();

  return (
    <div>
      
      <NavOptions/>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<Portfolio />} />
        <Route path="/contact" element={<ContactMe />} />
        {/* <Route path="/admin" element={<Admin location={location} />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
