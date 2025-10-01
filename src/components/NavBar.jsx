// src/components/NavBar.jsx
import React from "react";
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
  const { language, translation, changeLanguage } = useLanguage() || {};

  const t = (translation && translation[language]) || {};

  // fallback labels
  const servicesTitle = t.navServices ?? "Services";
  const ourServicesLabel = t.ourServices ?? "Our services";
  const sectorGovLabel = t.serviceSector ?? "Sector & Government services";
  const aboutLabel = t.navAbout ?? "About";
  const developmentLabel = t.navDevelopment ?? "Development";
  const strategicLabel = t.navStrategic ?? "Strategic";
  const clientsLabel = t.navClients ?? "Clients";
  const contactLabel = t.navContact ?? "Contact";

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
              {aboutLabel}
            </Nav.Link>

            <Nav.Link as={Link} to="/development" className="link">
              {developmentLabel}
            </Nav.Link>

            <NavDropdown
              title={servicesTitle}
              id="nav-services-dropdown"
              className="link"
              menuVariant="light"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/services/our-services">
                {ourServicesLabel}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/sector-government">
                {sectorGovLabel}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/strategic" className="link">
              {strategicLabel}
            </Nav.Link>

            <Nav.Link as={Link} to="/clients" className="link">
              {clientsLabel}
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className="link">
              {contactLabel}
            </Nav.Link>

            {/* Language picker */}
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
                <span>{language === "fr" ? "Fr" : "En"}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => changeLanguage("en")}
                  active={language === "en"}
                >
                  English (En)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => changeLanguage("fr")}
                  active={language === "fr"}
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
