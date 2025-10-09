import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ShowCaseService = () => {
  const navigate = useNavigate();
  return (
    <div className="main-contact-service">
      <h2>Let us know how we can be of service.</h2>
      <p>
        Our team is happy to answer your questions. Contact us today for a
        complimentary consultation on how best to take your business or
        franchise global.
      </p>
      <Button
        className="btn-outline"
        variant="outline-primary"
        onClick={() => navigate("/contact")}
      >
        Get started
      </Button>
    </div>
  );
};

export default ShowCaseService;
