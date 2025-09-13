import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import car3 from "../assets/car3.jpg";
import { useLanguage } from "../context/LanguageProvider";
const ServiceComponent = () => {
  const { language, translation } = useLanguage();
  return (
    <Container className="section">
      <Row>
        <Col>
          <h2>{translation[language].serviceComponentTitle}</h2>
          <p>{translation[language].serviceComponentParagraph}</p>
          <Button variant="outline-primary"> Learn more</Button>
        </Col>
        <Col className="imageService">
          <img src={car3} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceComponent;
