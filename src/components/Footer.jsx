import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import logo from "../../src/assets/Logo PNG_Plan de travail 1 copie.png";
import { useLanguage } from "../context/LanguageProvider";

function Footer() {
  const { language, translation } = useLanguage();
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
          <p>{translation[language].footer.address}</p>
          <p>{translation[language].footer.phone}</p>
          <p>{translation[language].footer.email}</p>
        </div>

        <ul style={{ listStyle: "none" }}>
          <li>{translation[language].footer.links[0]}</li>
          <li>{translation[language].footer.links[1]}</li>
          <li>{translation[language].footer.links[2]}</li>
          <li>{translation[language].footer.links[3]}</li>
          <li>{translation[language].footer.links[4]}</li>
          <li>{translation[language].footer.links[5]}</li>
        </ul>
        <Form>
          <h3>{translation[language].footer.newsletterTitle}</h3>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>{translation[language].footer.nameLabel} </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>{translation[language].footer.emailLabel}</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="btn-standard">
            {translation[language].footer.subscribeButton}
          </Button>
        </Form>
      </div>

      <p style={{ textAlign: "center" }}>
        &copy;{translation[language].footer.copyright} {generateDate()}
      </p>
    </div>
  );
}

export default Footer;
