import CarousselHeader from "../components/CarousselHeader";
import Footer from "../components/Footer";
import FrequentAskedQuestions from "../components/FrequentAskedQuestions";
import NavBar from "../components/NavBar";
import ServiceComponent from "../components/ServiceComponent";

const Home = () => {
  return (
    <>
      <NavBar />
      <CarousselHeader />
      <ServiceComponent />
      <FrequentAskedQuestions />
      <Footer />
    </>
  );
};
export default Home;
