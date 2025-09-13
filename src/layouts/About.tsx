import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import Team from "../components/Team";
import ExperienceProcess from "../components/ExperienceProcess";
import Network from "../components/Network";
import TradeDevelopment from "../components/TradeDevelopment";
import ShowCaseService from "../components/ShowCaseService";

import background from "../assets/car4.jpg";
import { useLanguage } from "../context/LanguageProvider";
const About = () => {
  const { language, translation } = useLanguage();

  return (
    <div>
      <NavBar />
      <SecondaryPagesHeader
        title={translation[language].titleAbout}
        paragraph={translation[language].paragraphAbout}
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
