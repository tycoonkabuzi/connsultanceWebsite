import Carousel from "react-bootstrap/Carousel";
import car1 from "../assets/pexels-aaditya-arora-188236-592753.jpg";
import car2 from "../assets/pexels-olly-3769138.jpg";
import car3 from "../assets/pexels-pixabay-41949.jpg";
import car4 from "../assets/car4.jpg";
import { useLanguage } from "../context/LanguageProvider";
function CarousselHeader() {
  const { language, translation } = useLanguage();
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100 " src={car1} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].carrouselTitle}</h1>
          <p>{translation[language].carrouselParagraph}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100 " src={car1} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].carrouselTitle}</h1>
          <p>{translation[language].carrouselParagraph}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100 " src={car1} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].carrouselTitle}</h1>
          <p>{translation[language].carrouselParagraph}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100 " src={car1} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].carrouselTitle}</h1>
          <p>{translation[language].carrouselParagraph}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarousselHeader;
