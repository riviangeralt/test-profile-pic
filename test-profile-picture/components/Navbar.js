import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar as NavBar, NavDropdown } from "react-bootstrap";

function Navbar() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      <div className="container p-4">
        <NavBar collapseOnSelect expand="lg" bg="#fff" variant="light">
          <NavBar.Brand href="#home">testprofilepicture</NavBar.Brand>
          <NavBar.Toggle aria-controls="responsive-navbar-nav" />
          <NavBar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#img-upload">Try The Tool</Nav.Link>
              <Nav.Link href="#">Advertisements</Nav.Link>
              <Nav.Link href="#contact_section">Contact</Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </NavBar>
        {showTopBtn && (
          <button
            onClick={goToTop}
            className="scroll-to-top-btn btn btn-primary rounded-circle"
          >
            <i className="fa fa-chevron-up"></i>
          </button>
        )}
      </div>
    </>
  );
}

export default Navbar;
