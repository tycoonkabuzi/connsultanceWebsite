import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import whyClients from "../assets/why-clients-choose.jpg";
import experienceBorders from "../assets/experience-borders.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const ExperienceProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="main-experience">
      <Container className="section">
        <Row className="align-items-center mb-5 flex-column-reverse flex-md-row">
          <Col md={6} data-aos="fade-right">
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
            <Button
              className="btn-outline"
              variant="outline-primary"
              onClick={() => navigate("/development")}
            >
              Learn more
            </Button>
          </Col>
          <Col md={6} data-aos="fade-left">
            <div className="imageService">
              <img src={whyClients} alt="clients shaking hands" />
            </div>
          </Col>
        </Row>

        <Row className="align-items-center flex-column-reverse flex-md-row">
          <Col md={6} data-aos="fade-right">
            <div className="imageService">
              <img src={experienceBorders} alt="globe" />
            </div>
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2>Experience That Crosses Borders</h2>
            <p>
              Our founder and core team bring real-world experience, not just
              theory. We’ve worked across public and private sectors in Europe,
              Africa, and Asia. We know what it takes to enter new markets,
              navigate regulations, and build long-term value from the ground
              up.
            </p>
            <ul>
              <li>Work grounded in various countries</li>
              <li>
                Insights from both multinational firms and frontier economies
              </li>
              <li>Private, public, and development sector exposure</li>
            </ul>
            <Button
              className="btn-outline"
              variant="outline-primary"
              onClick={() => navigate("/development")}
            >
              Learn more
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExperienceProcess;
