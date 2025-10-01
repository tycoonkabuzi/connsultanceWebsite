import Carousel from "react-bootstrap/Carousel";
import car1 from "../assets/pexels-aaditya-arora-188236-592753.jpg";
import car2 from "../assets/pexels-olly-3769138.jpg";
import car3 from "../assets/pexels-pixabay-41949.jpg";
import car4 from "../assets/car4.jpg";
import { useLanguage } from "../context/LanguageProvider";

function CarousselHeader() {
  const { language, translation } = useLanguage();

  const slides = [
    {
      src: car1,
      alt: "City lights at night",
      title: translation[language].carrouselTitleOne,
      text: translation[language].carrouselParagraphOne,
    },
    {
      src: car2,
      alt: "Person working on laptop",
      title: translation[language].carrouselTitleTwo,
      text: translation[language].carrouselParagraphTwo,
    },
    {
      src: car3,
      alt: "Nature and mountains",
      title: translation[language].carrouselTitleThree,
      text: translation[language].carrouselParagraphThree,
    },
    {
      src: car4,
      alt: "Business meeting",
      title: translation[language].carrouselTitleFour,
      text: translation[language].carrouselParagraphFour,
    },
  ];

  return (
    <Carousel fade interval={4000} data-bs-theme="light">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slide.src} alt={slide.alt} />
          <div className="centerCaption">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarousselHeader;
