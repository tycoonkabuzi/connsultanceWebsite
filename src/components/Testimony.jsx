import Carousel from "react-bootstrap/Carousel";
import { useLanguage } from "../context/LanguageProvider";

function Testimony() {
  const { language, translation } = useLanguage();
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item className="carousel-wrapper">
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].testimonials.title}</h1>
          <p>{translation[language].testimonials.firstTestimony.paragraph}</p>
          <p>{translation[language].testimonials.firstTestimony.client}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-wrapper">
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].testimonials.title}</h1>
          <p>{translation[language].testimonials.thirdTestimony.paragraph}</p>
          <p>{translation[language].testimonials.thirdTestimony.client}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-wrapper">
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].testimonials.title}</h1>
          <p>{translation[language].testimonials.fourthTestimony.paragraph}</p>
          <p>{translation[language].testimonials.fourthTestimony.client}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimony;
