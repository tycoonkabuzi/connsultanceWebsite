import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./layouts/Home";
import About from "./layouts/About";
import Development from "./layouts/Development";
import Services from "./layouts/Services";
import StrategicAdvisory from "./layouts/StrategicAdisory";

import SectorServices from "./layouts/SectorServices";
import { LanguageProvider } from "./context/LanguageProvider";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/about" element={<About />} />
        <Route path="/development" element={<Development />} />
        <Route path="/services" element={<Services />} />
        <Route path="/strategic" element={<StrategicAdvisory />} />
        <Route path="/sector" element={<SectorServices />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
