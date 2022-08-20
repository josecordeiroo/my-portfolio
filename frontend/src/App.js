import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Routes
import { Routes, Route } from "react-router-dom";

//Components
import AboutUs from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faReact, faSquareGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faGraduationCap, faImages, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter, faReact, faFacebook, faYoutube, faLaptopCode, faSquareGithub, faGraduationCap, faImages)

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />


        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/portfolio/:slug" element={<Portfolio/>}/>
          
        



        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
