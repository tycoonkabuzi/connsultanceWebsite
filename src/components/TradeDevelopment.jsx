import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import car3 from "../../src/assets/car3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const TradeDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="section">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row mb-5">
          <Col md={6} data-aos="fade-right">
            <h2>Methodology that Drives Execution</h2>
            <p>
              We use a step-by-step, proven development framework to launch
              products, grow revenues, and facilitate foreign investment. Our
              methodology is practical, ROI-driven, and tailored to your
              industry, region, and goals.
              <ul>
                <li>
                  🧭 GlobalLaunch™, StrategyBuild™, and Execute360™ — frameworks
                  built for action
                </li>
                <li>🧩 Sector-specific strategies for measurable outcomes</li>
                <li>
                  📊 End-to-end support: from strategy to signing contracts
                </li>
              </ul>
            </p>
            <Button className="btn-outline" variant="outline-primary">
              Our tools
            </Button>
          </Col>
          <Col md={6} className="imageService" data-aos="fade-left">
            <img src={car3} alt="Methodology" />
          </Col>
        </Row>

        <Row className="align-items-center flex-column-reverse flex-md-row mb-5">
          <Col md={6} className="imageService" data-aos="fade-right">
            <img src={car3} alt="Network" />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2>Local + Global Network</h2>
            <p>
              Our growing network includes trusted consultants, legal experts,
              investment specialists, and government advisors across Europe,
              Africa, and the Middle East. This hybrid ecosystem allows us to
              move fast, stay local, and scale global — bringing together the
              best minds to serve your mission.
              <ul>
                <li>🤝 On-the-ground collaborators in 5+ countries</li>
                <li>🤝 Direct access to buyers, investors, decision-makers</li>
                <li>🤝 Multilingual support and cross-border coordination</li>
              </ul>
            </p>
            <Button className="btn-outline" variant="outline-primary">
              Partner Brand
            </Button>
          </Col>
        </Row>

        <Row className="align-items-center flex-column-reverse flex-md-row mb-5">
          <Col md={6} data-aos="fade-right">
            <h2>Smart Tools & Strategic Intelligence</h2>
            <p>
              GGS combines human insight with powerful tools to map opportunity,
              benchmark readiness, and ensure sustainable growth. From investor
              pipelines to global launch decks, we help you communicate your
              value and scale with confidence.
              <ul>
                <li>🧠 Market opportunity mapping & Go-to-market toolkits</li>
                <li>
                  🧠 Investment pitch decks & Public sector reform blueprints
                </li>
                <li>
                  🧠 Pipeline CRM and reporting tools integrated into operations
                </li>
              </ul>
              <ul>
                <li>🤝 On-the-ground collaborators in 5+ countries</li>
                <li>🤝 Direct access to buyers, investors, decision-makers</li>
                <li>🤝 Multilingual support and cross-border coordination</li>
              </ul>
            </p>
            <Button className="btn-outline" variant="outline-primary">
              Partner Brand
            </Button>
          </Col>
          <Col md={6} className="imageService" data-aos="fade-left">
            <img src={car3} alt="Tools & Intelligence" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TradeDevelopment;
