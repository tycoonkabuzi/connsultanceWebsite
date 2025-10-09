import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import logo from "../../src/assets/Logo PNG_Plan de travail 1 copie.png";
import { useLanguage } from "../context/LanguageProvider";

function Footer() {
  const { language, translation } = useLanguage();
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const generateDate = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .send(
        "service_5k366w9", // Your EmailJS Service ID
        "template_r9botvc", // Your EmailJS Template ID
        {
          from_email: email,
          to_email: "info@globalgrowthsolutions.org",
        },
        "-Ll9ex00IvhWBATsp" // Your EmailJS Public Key
      )
      .then(() => {
        setEmail("");
        setStatus("✅ Subscription successful!");
      })
      .catch(() => {
        setStatus("❌ Subscription failed. Please try again later.");
      })
      .finally(() => setSending(false));
  };

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
          {translation[language].footer.links.map((link, idx) => (
            <li key={idx}>{link}</li>
          ))}
        </ul>

        <Form onSubmit={handleSubscribe}>
          <h3>{translation[language].footer.newsLetterTitle}</h3>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>{translation[language].footer.emailLabel}</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="btn-standard" disabled={sending}>
            {sending
              ? "Subscribing..."
              : translation[language].footer.subscribeButton}
          </Button>
          {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
        </Form>
      </div>

      <p style={{ textAlign: "center" }}>
        &copy; {translation[language].footer.copyright} {generateDate()}
      </p>
    </div>
  );
}

export default Footer;
