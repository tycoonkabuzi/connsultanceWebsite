import background from "../assets/car3.jpg";
const SecondaryPagesHeader = () => {
  return (
    <div className="mainPagesHeader">
      <div className="image-header-container">
        <img src={background} alt="background for the header" />
      </div>
      <div className="text-header-container">
        <h1>About</h1>
        <p>
          Edwards Global Services (EGS) offers a unique combination of
          experience.
        </p>
      </div>
    </div>
  );
};

export default SecondaryPagesHeader;
