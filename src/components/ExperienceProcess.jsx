import { Button, Col, Container, Row } from "react-bootstrap";
import car3 from "../assets/car2.jpg";

const ExperienceProcess = () => {
  return (
    <div className="main-experience">
      {" "}
      <Container className="section">
        <Row>
          <Col>
            <h2>Why Clients Choose GGS to Grow, Expand, and Lead</h2>
            <p>
              Global Growth Solutions (GGS) is not just another consultancy — we
              are your strategic partner in global market expansion,
              public-private transformation, and high-impact representation.
              What sets us apart is our hands-on leadership, tailored solutions,
              and a deep understanding of both the African opportunity and the
              global business landscape. Whether you're a company looking to
              scale internationally, or a government aiming to attract
              investment and digitize public services — GGS delivers results.
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
            <h2>Experience That Crosses Borders</h2>
            <p>
              Our founder and core team bring real-world experience, not just
              theory. We’ve worked across public and private sectors in Europe,
              Africa, and Asia. We know what it takes to enter new markets,
              navigate regulations, and build long-term value from the ground
              up.
              <ul>
                <li>Work grounded in various countries</li>
                <li>
                  Insights from both multinational firms and frontier economies
                </li>
                <li>Private, public, and development sector exposure</li>
              </ul>
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
