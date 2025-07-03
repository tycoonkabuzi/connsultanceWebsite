import { Button, Col, Container, Row } from "react-bootstrap";
import car3 from "../assets/car2.jpg";

const ExperienceProcess = () => {
  return (
    <div className="main-experience">
      {" "}
      <Container className="section">
        <Row>
          <Col>
            <h2>Experience</h2>
            <p>
              Experience EGS’ U.S.-based executives have lived in 13 countries
              and have 100+ years of international executive operating
              experience in over 60 countries, across many business sectors and
              cultures.
            </p>
            <Button className="btn-outline" variant="outline-primary">
              Learn more
            </Button>
          </Col>
          <Col className="imageService">
            <img src={car3} alt="" />
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col className="imageService">
            <img src={car3} alt="" />
          </Col>
          <Col>
            <h2>Process</h2>
            <p>
              Our processes are defined, proven, and trademarked, and our team
              is return on investment (ROI)-focused so that you are successful
              earlier and for the long-term
            </p>
            <Button className="btn-outline" variant="outline-primary">
              Learn more
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExperienceProcess;
