import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../assets/Logo PNG_Plan de travail 1.png";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useLanguage } from "../context/LanguageProvider";

function NavBar() {
  const navigate = useNavigate();
  const { language, translation, setLanguage } = useLanguage(); // ✅ context
  const [currentLanguageLabel, setCurrentLanguageLabel] = useState(
    language === "fr" ? "Fr" : "En"
  );

  const t = translation[language] || {};

  const handleLanguageSelect = (langCode, label) => {
    setCurrentLanguageLabel(label);
    setLanguage(langCode); // ✅ changes context => updates all translations
  };

  return (
    <Navbar expand="lg" className="nav-element" sticky="top">
      <Container>
        <Navbar.Brand
          className="nav-logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Company logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/about" className="link">
              {t.navAbout}
            </Nav.Link>

            <Nav.Link as={Link} to="/development" className="link">
              {t.navDevelopment}
            </Nav.Link>

            {/* ✅ Services dropdown now uses your translation keys */}
            <NavDropdown
              title={t.navServices}
              id="nav-services-dropdown"
              className="link"
              menuVariant="light"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/services/our-services">
                {t.ourServices}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/sector-government">
                {t.serviceSector}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/strategic" className="link">
              {t.navStrategic}
            </Nav.Link>
            <Nav.Link as={Link} to="/clients" className="link">
              {t.navClients}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="link">
              {t.navContact}
            </Nav.Link>

            {/* ✅ Language Switcher */}
            <Dropdown align="end">
              <Dropdown.Toggle
                id="language-dropdown"
                variant="link"
                className="link d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <Icon
                  style={{ fontSize: "20px", marginRight: "6px" }}
                  icon="material-symbols:globe-asia-sharp"
                />
                <span>{currentLanguageLabel}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => handleLanguageSelect("en", "En")}
                  active={currentLanguageLabel === "En"}
                >
                  English (En)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleLanguageSelect("fr", "Fr")}
                  active={currentLanguageLabel === "Fr"}
                >
                  Français (Fr)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
