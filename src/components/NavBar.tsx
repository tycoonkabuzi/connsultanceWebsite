import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo PNG_Plan de travail 1.png";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="nav-element">
        <Container>
          <Navbar.Brand
            className="nav-logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo}></img>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className="link" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/development">
                Development
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/services">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link>Strategic Advisory Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link>Clients</Link>
            </Nav.Link>
            <Nav.Link>
              <Link>Contact</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
