import ContactDevelopment from "../components/ContactDevelopment";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import Steps from "../components/Steps";

import background from "../assets/car3.jpg";
import { useEffect } from "react";
const Development = () => {
  const title = "Development";
  const paragraph =
    " Building strategies and solutions for sustainable growth.";
  useEffect(() => {
    document.title = "Development";
  }, []); // runs once when the component mounts

  return (
    <div>
      <NavBar />
      <SecondaryPagesHeader
        title={title}
        paragraph={paragraph}
        background={background}
      />
      <Steps />
      <ContactDevelopment />
      <Footer />
    </div>
  );
};

export default Development;
