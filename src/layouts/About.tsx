import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import Team from "../components/Team";
import ExperienceProcess from "../components/ExperienceProcess";
import Network from "../components/Network";
import TradeDevelopment from "../components/TradeDevelopment";
import ShowCaseService from "../components/ShowCaseService";

const About = () => {
  return (
    <div>
      <NavBar />
      <SecondaryPagesHeader />
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
