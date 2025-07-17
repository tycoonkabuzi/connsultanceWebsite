import NavBar from "../components/NavBar";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import background from "../assets/pexels-fauxels-3184423.jpg";
import Footer from "../components/Footer";
import StrategicAdvisoryPage from "../components/StrategicAdvisoryPage";
import ContactServices from "../components/ContactServices";

const StrategicAdvisory = () => {
  const title = "Strategic Advisory Services";
  const paragraph = " Strategic text to be displayed here";
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
