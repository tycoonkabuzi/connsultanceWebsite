import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import car3 from "../assets/car3.jpg";
import { useLanguage } from "../context/LanguageProvider";
import { useNavigate } from "react-router-dom";

const ServiceComponent = () => {
  const { language, translation } = useLanguage();
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Text Column */}
        <Col
          xs={12}
          lg={6}
          className="mb-4 mb-lg-0 text-center text-lg-start"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h2>{translation[language].serviceComponentTitle}</h2>
          <p>{translation[language].serviceComponentParagraph}</p>
          <Button
            style={{ borderColor: "#46c0a0", color: "#46c0a0" }}
            variant="outline-primary"
            onClick={() => navigate("/services/our-services")}
          >
            Learn more
          </Button>
        </Col>

        {/* Image Column */}
        <Col
          xs={12}
          lg={6}
          className="text-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src={car3}
            alt="Service"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceComponent;
