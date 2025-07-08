import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./layouts/Home";
import About from "./layouts/About";
import Development from "./layouts/Development";
import Services from "./layouts/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/development" element={<Development />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
