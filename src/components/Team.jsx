import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import image1 from "../assets/pexels-chrofit-the-man-to-call-2515393-5615665.jpg";
import image2 from "../assets/pexels-cottonbro-5378700.jpg";
import image3 from "../assets/pexels-dziana-hasanbekava-7275385.jpg";
import image4 from "../assets/pexels-gabby-k-5876695.jpg";

const Team = () => {
  return (
    <Container className="team-main">
      <h1> Our team</h1>
      <Row>
        <Col xs={6} md={4} className="team-item">
          <div className="image-container">
            <Image src={image1} className="image" />
          </div>
          <div className="member-description">
            <h2>Fabien John Tube </h2>
            <p>Secretary</p>
          </div>
        </Col>

        <Col xs={6} md={4} className="team-item">
          <div className="image-container">
            <Image src={image1} className="image" />
          </div>
          <div className="member-description">
            <h2>Kevin Mubiala Ndeke</h2>
            <p>Associate Director International Business Dev.</p>
          </div>
        </Col>

        <Col xs={6} md={4} className="team-item">
          <div className="image-container">
            <Image src={image1} className="image" />
          </div>
          <div className="member-description">
            <h2>Tycoon Kabuzi</h2>
            <p>Associate Director Strategy & Advisory</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
