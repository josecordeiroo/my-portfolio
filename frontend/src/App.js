import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Routes
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Components
import AboutUs from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav/>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
    </div>
  );
}

export default App;
