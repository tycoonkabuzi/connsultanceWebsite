import React from "react";

const SecondaryPagesHeader = ({ title, paragraph, background }) => {
  return (
    <div className="carousel-image-wrapper" style={{ height: "400px" }}>
      <img src={background} alt="background for the header" />
      <div className="centerCaption">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default SecondaryPagesHeader;
