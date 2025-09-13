const SecondaryPagesHeader = ({ title, paragraph, background }) => {
  return (
    <div className="mainPagesHeader">
      <div className="image-header-container">
        <img src={background} alt="background for the header" />
      </div>
      <div className="text-header-container">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default SecondaryPagesHeader;
