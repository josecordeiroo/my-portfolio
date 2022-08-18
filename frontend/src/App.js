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
import PortfolioDetail from "./components/PortfolioDetail";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/project/:slug" element={<PortfolioDetail />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
