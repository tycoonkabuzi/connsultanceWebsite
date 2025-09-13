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
            <h2>Esther Kamba</h2>
            <p> Writer</p>
          </div>
        </Col>
        <Col xs={6} md={4} className="team-item">
          <div className="image-container">
            <Image src={image2} className="image" />
          </div>
          <div className="member-description">
            <h2>Mamy Bali</h2>
            <p> C.E.O</p>
          </div>
        </Col>
        <Col xs={6} md={4} className="team-item">
          <div className="image-container">
            <Image src={image3} className="image" />
          </div>
          <div className="member-description">
            <h2>ISMAEL Lumbi</h2>
            <p> C.E.O</p>
          </div>
        </Col>
        <Col xs={6} md={4} className="team-item">
          <div className="image-container">
            <Image src={image4} className="image" />
          </div>
          <div className="member-description">
            <h2>Samy Amina</h2>
            <p> P.A</p>
          </div>
        </Col>
        <Col xs={6} md={4} className="team-item">
          <div className="image-container">
            <Image src={image2} className="image" />
          </div>
          <div className="member-description">
            <h2>John Tube</h2>
            <p> C.E.O</p>
          </div>
        </Col>
        <Col xs={6} md={4} className="team-item">
          <div className="image-container">
            <Image src={image1} className="image" />
          </div>
          <div className="member-description">
            <h2>Madison Kipembe</h2>
            <p>Secretary</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
