import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import Team from "../components/Team";
import ExperienceProcess from "../components/ExperienceProcess";
import Network from "../components/Network";
import TradeDevelopment from "../components/TradeDevelopment";
import ShowCaseService from "../components/ShowCaseService";

import background from "../assets/car4.jpg";
const About = () => {
  const title = "About";
  const paragraph = " Why Companies Choose EGS to Take Them Global";
  return (
    <div>
      <NavBar />
      <SecondaryPagesHeader
        title={title}
        paragraph={paragraph}
        background={background}
      />
      <ExperienceProcess />
      <Network />
      <TradeDevelopment />
      <Team />
      <ShowCaseService />
      <Footer />
    </div>
  );
};
export default About;
