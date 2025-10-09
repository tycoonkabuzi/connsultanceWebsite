import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ContactDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="main-contact-service">
      <h1>
        Contact us to get started with developing your custom international
        business plan today.
      </h1>
      <p>
        We look forward to serving you. Send us an email using this button to
        begin a conversation.
      </p>

      <Button className="btn-standard" onClick={() => navigate("/contact")}>
        Contact us
      </Button>
    </div>
  );
};

export default ContactDevelopment;
