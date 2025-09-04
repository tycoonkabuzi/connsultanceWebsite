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
          <h1>{translation[language].carrouselTitleOne}</h1>
          <p>{translation[language].carrouselParagraphOne}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100 " src={car2} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].carrouselTitleTwo}</h1>
          <p>{translation[language].carrouselParagraphTwo}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100 " src={car3} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].carrouselTitleThree}</h1>
          <p>{translation[language].carrouselParagraphThree}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100 " src={car4} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>{translation[language].carrouselTitleFour}</h1>
          <p>{translation[language].carrouselParagraphFour}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarousselHeader;
