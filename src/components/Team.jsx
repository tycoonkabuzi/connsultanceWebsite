import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import AOS from "aos";
import "aos/dist/aos.css";

import kevin from "../assets/kevin.png";
import john from "../assets/john.png";
import tycoon from "../assets/tycoon.jpg";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamMembers = [
    { name: "Fabien John Tube", role: "C.E.O", image: john },
    {
      name: "Kevin Mubiala Ndeke",
      role: "Associate Director International Business Dev.",
      image: kevin,
    },
    {
      name: "Ntwali Kabuzi",
      role: "Associate Director Strategy & Advisory",
      image: tycoon,
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
