import CarousselHeader from "../components/CarousselHeader";
import Footer from "../components/Footer";
import FrequentAskedQuestions from "../components/FrequentAskedQuestions";

import ServiceComponent from "../components/ServiceComponent";
import Team from "../components/Team";
import Testimony from "../components/Testimony";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <CarousselHeader />
      <ServiceComponent />
      <FrequentAskedQuestions />
      <Testimony />
      <Team />
      <Footer />
    </>
  );
};
export default Home;
