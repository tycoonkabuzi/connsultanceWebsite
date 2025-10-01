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
import Contact from "./layouts/Contact";
import Clients from "./layouts/Clients";

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/development" element={<Development />} />
        <Route path="/services/our-services" element={<Services />} />
        <Route
          path="/services/sector-government"
          element={<SectorServices />}
        />
        <Route path="/strategic" element={<StrategicAdvisory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        {/* Optional 404 */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
