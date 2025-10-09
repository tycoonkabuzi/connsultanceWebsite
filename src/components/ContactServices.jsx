import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ContactServices = () => {
  const navigate = useNavigate();
  return (
    <div className="main-contact-service">
      <h1>Contact us to get started today.</h1>
      <p>
        We look forward to serving you. Send us an email using this button to
        begin a complimentary consultation on how to realize the full global
        potential of your franchise.
      </p>

      <Button
        className="btn-outline"
        variant="outline"
        onClick={() => navigate("/contact")}
      >
        Contact us
      </Button>
    </div>
  );
};
export default ContactServices;
