import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Routes
import { Routes, Route, useLocation } from "react-router-dom";

//Components
import AboutUs from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";
import Admin from "./pages/Admin";
import { LoginForm, PasswordResetForm, SignupForm } from "./components/auth/Authentication";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faReact,
  faSquareGithub,
  faNode,
  faJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
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
  faGithub
);

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      {location.pathname !== ("/admin") && <Nav />}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<Portfolio />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/admin" element={<Admin location={location} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/reset" element={<PasswordResetForm />} />
      </Routes>
    </div>
  );
}

export default App;
