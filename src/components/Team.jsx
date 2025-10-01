import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../assets/pexels-chrofit-the-man-to-call-2515393-5615665.jpg";
import image2 from "../assets/pexels-cottonbro-5378700.jpg";
import image3 from "../assets/pexels-dziana-hasanbekava-7275385.jpg";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamMembers = [
    { name: "Fabien John Tube", role: "Secretary", image: image1 },
    {
      name: "Kevin Mubiala Ndeke",
      role: "Associate Director International Business Dev.",
      image: image2,
    },
    {
      name: "Tycoon Kabuzi",
      role: "Associate Director Strategy & Advisory",
      image: image3,
    },
  ];

  return (
    <Container className="team-main">
      <h1 data-aos="fade-up">Our Team</h1>
      <Row>
        {teamMembers.map((member, index) => (
          <Col
            xs={6}
            md={4}
            className="team-item"
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="image-container">
              <Image src={member.image} className="image" />
            </div>
            <div className="member-description">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
