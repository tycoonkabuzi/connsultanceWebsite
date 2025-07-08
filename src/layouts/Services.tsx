import ContactServices from "../components/ContactServices";

import OverviewServices from "../components/OverviewServices";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import ServicesDetails from "../components/ServicesDetails";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import background from "../assets/car2.jpg";
const Services = () => {
  const title = "Services";
  const paragraph = " Services paragraph text";
  return (
    <div>
      <NavBar />
      <SecondaryPagesHeader
        title={title}
        paragraph={paragraph}
        background={background}
      />
      <OverviewServices />
      <ServicesDetails />
      <ContactServices />
      <Footer />
    </div>
  );
};

export default Services;
