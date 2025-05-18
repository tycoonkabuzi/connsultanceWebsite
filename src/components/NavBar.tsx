import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">John Consult</Navbar.Brand>
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
