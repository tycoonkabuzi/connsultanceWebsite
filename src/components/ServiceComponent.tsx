import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import car3 from "../assets/car3.jpg";
const ServiceComponent = () => {
  return (
    <Container className="section">
      <Row>
        <Col>
          <h2>Services</h2>
          <p>
            Edwards Global Services, Inc. (EGS) exports businesses around the
            world by providing international business consulting services
            including complete international market research, operations and
            development solutions for our clients. From the initial global
            market research and country prioritization, to developing new
            international markets and providing operational support around the
            world, EGS offers the complete Going Global solution.
          </p>
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
