import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import logo from "../../src/assets/Logo PNG_Plan de travail 1 copie.png";

function Footer() {
  const generateDate = () => {
    const date = new Date();
    return date.getFullYear();
  };
  generateDate();
  return (
    <div style={{ backgroundColor: "#39d1b8" }}>
      <div className="footer">
        <div>
          <img
            style={{ width: "400px", marginBottom: "50px" }}
            src={logo}
            alt="logo picture"
          />
          <p>9800 MacArthur Blvd. Suite 300, Irvine, California 92612</p>
          <p>Phone: +243 934 234 234</p>
          <p>Email: info@globalgrowthsolutions.org</p>
        </div>

        <ul style={{ listStyle: "none" }}>
          <li>About</li>
          <li>Development</li>
          <li>Services</li>
          <li>Strategic Advisory Services</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
        <Form>
          <h3>Sign up for our Newsletter</h3>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="btn-standard"> Subscribe</Button>
        </Form>
      </div>

      <p style={{ textAlign: "center" }}>
        &copy;copyrights Global Growth Solutions {generateDate()}
      </p>
    </div>
  );
}

export default Footer;
