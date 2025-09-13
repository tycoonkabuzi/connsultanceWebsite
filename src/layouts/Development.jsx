import ContactDevelopment from "../components/ContactDevelopment";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import Steps from "../components/Steps";

import background from "../assets/car3.jpg";
const Development = () => {
  const title = "Development";
  const paragraph = " Development paragraph text";

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
