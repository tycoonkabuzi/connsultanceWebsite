import { Button, Col, Container, Row } from "react-bootstrap";
import car3 from "../../src/assets/car3.jpg";
const TradeDevelopment = () => {
  return (
    <div>
      <Container className="section">
        <Row>
          <Col>
            <h2>Proven, Trademarked Going Global Tools</h2>
            <p>
              EGS leverages proprietary tools to take your business global.
              Trademarked tools – GlobalAssess™, GlobalPlan™, GlobalVue™,
              GlobalTeam™, GlobalProfile™ and LicensePro™ – help determine the
              countries that are the best fit for your company and the best
              licensees for your profitability.
            </p>
            <Button className="btn-outline" variant="outline-primary">
              Our tools
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
            <h2>One Brand Per Sector – for Franchisors</h2>
            <p>We only work with one franchise brand in a sector at a time.</p>
            <Button className="btn-outline" variant="outline-primary">
              Parner Brand
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TradeDevelopment;
