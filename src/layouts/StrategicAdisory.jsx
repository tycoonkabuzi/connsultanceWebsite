import NavBar from "../components/NavBar";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import background from "../assets/pexels-fauxels-3184423.jpg";
import Footer from "../components/Footer";
import StrategicAdvisoryPage from "../components/StrategicAdvisoryPage";
import ContactServices from "../components/ContactServices";
import { useEffect } from "react";

const StrategicAdvisory = () => {
  useEffect(() => {
    document.title = "Strategic Advisory";
  }, []); // runs once when the component mounts

  const title = "Strategic Advisory Services";
  const paragraph =
    " Providing expert guidance to drive informed decisions and global growth.";
  return (
    <>
      <NavBar />
      <SecondaryPagesHeader
        title={title}
        paragraph={paragraph}
        background={background}
      />
      <StrategicAdvisoryPage />
      <ContactServices />
      <Footer />
    </>
  );
};
export default StrategicAdvisory;
