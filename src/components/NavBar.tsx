import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo PNG_Plan de travail 1.png";

function NavBar() {
  return (
    <>
      <Navbar className="nav-element">
        <Container>
          <Navbar.Brand className="nav-logo" href="#home">
            <img src={logo}></img>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Development</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Strategic Advisory Services</Nav.Link>
            <Nav.Link href="#pricing">Clients</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
