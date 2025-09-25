import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo PNG_Plan de travail 1.png";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import DropDown from "./DropDown";
import DropDownLanguage from "./DropDownLanguage";
import { useLanguage } from "../context/LanguageProvider";
function NavBar() {
  const navigate = useNavigate();
  const [service, setService] = useState(false);
  const [triggerChangeLanguage, setTriggerChangeLanguage] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("En");
  const changeLanguageCurrentStatus = (data) => {
    setCurrentLanguage(data);
  };

  const { language, translation } = useLanguage();
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
                {translation[language].navAbout}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/development">
                {translation[language].navDevelopment}
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => setService(!service)}>
              <Link className="link">
                {translation[language].navServices}
                <Icon icon="ic:baseline-arrow-drop-down" />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/strategic">
                {translation[language].navStrategic}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/clients">
                {translation[language].navClients}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/contact">
                {translation[language].navContact}
              </Link>
            </Nav.Link>

            <Nav.Link
              onClick={() => setTriggerChangeLanguage(!triggerChangeLanguage)}
            >
              <Link className="link" to="">
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:globe-asia-sharp"
                />{" "}
                {currentLanguage}
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
        <DropDown service={service} />
        <DropDownLanguage
          triggerChangeLanguage={triggerChangeLanguage}
          changeLanguageCurrentStatus={changeLanguageCurrentStatus}
        />
      </Navbar>
    </>
  );
}

export default NavBar;
