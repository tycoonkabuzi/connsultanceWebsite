import Carousel from "react-bootstrap/Carousel";

import image1 from "../assets/faq1.jpg";
import image2 from "../assets/faq2.jpg";
import image3 from "../assets/faq3.jpg";
import { Button } from "react-bootstrap";
import { useLanguage } from "../context/LanguageProvider";

const FrequentAskedQuestions = () => {
  const { language, translation } = useLanguage();
  return (
    <Carousel className="carousel-image-wrapper size-faq" indicators={false}>
      <Carousel.Item interval={5000} className="size-faq">
        <h2 className="faq-background">FAQ 1</h2>
        <img className="d-block w-100" src={image1} alt="" />
        <Carousel.Caption className="centerCaption">
          <h3>{translation[language].faqParagraphOne}</h3>
          <br />
          <Button variant="outline-primary variantWhite">
            {translation[language].faqButton}
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000} className="size-faq">
        <h2 className="faq-background">FAQ 2</h2>
        <img className="d-block w-100  " src={image2} alt="" />
        <Carousel.Caption className="centerCaption">
          <h3>{translation[language].faqParagraphTwo}</h3>
          <br />
          <Button variant="outline-primary variantWhite">
            {translation[language].faqButton}
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="size-faq" interval={5000}>
        <h2 className="faq-background">FAQ 3</h2>
        <img className="d-block w-100  " src={image3} alt="" />
        <Carousel.Caption className="centerCaption">
          <h3>
            <h3>{translation[language].faqParagraphThree}</h3>
          </h3>
          <br />
          <Button variant="outline-primary variantWhite">
            {translation[language].faqButton}
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default FrequentAskedQuestions;
