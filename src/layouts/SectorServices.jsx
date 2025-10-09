import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import background from "../assets/car2.jpg";
import PublicSector from "../components/PublicSector";
const SectorServices = () => {
  useEffect(() => {
    document.title = "Sector";
  }, []); // runs once when the component mounts

  const title = "GGS Public Sector & Government Services";
  const paragraph =
    " Strategic support for governments ready to attract investment, unlock trade, modernize systems, and lead sustainable development.";
  return (
    <>
      <NavBar />
      <SecondaryPagesHeader
        title={title}
        paragraph={paragraph}
        background={background}
      />
      <PublicSector />
      <Footer />
    </>
  );
};

export default SectorServices;
