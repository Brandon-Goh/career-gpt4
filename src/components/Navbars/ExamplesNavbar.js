import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50; // Adjust this value as needed
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        color="info"
        expand="lg"
        style={{ paddingRight: "1000px" }}
      >
        <Container>
          {/* <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                One more separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          <div className="navbar-translate">
            <NavbarBrand tag={Link} to="/" id="navbar-brand">
              AICareerPal
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              To help guide you through your dream career path
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar style={{ width: "1400px" }}>
              <NavItem>
                <NavLink onClick={() => scrollToSection("problem")}>
                  Problem
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollToSection("solution")}>
                  Solution
                </NavLink>
              </NavItem>{" "}
              <NavItem>
                <NavLink onClick={() => scrollToSection("personas")}>
                  User Personas
                </NavLink>
              </NavItem>{" "}
              <NavItem>
                <NavLink onClick={() => scrollToSection("market")}>
                  Market Research
                </NavLink>
              </NavItem>{" "}
              <NavItem>
                <NavLink onClick={() => scrollToSection("re")}>
                  User Research
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollToSection("usa")}>
                  Usability Goals
                </NavLink>
              </NavItem>{" "}
              <NavItem>
                <NavLink onClick={() => scrollToSection("use")}>
                  UX Goals
                </NavLink>
              </NavItem>{" "}
              <NavItem>
                <NavLink onClick={() => scrollToSection("hta")}>HTA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollToSection("de")}>
                  Low-Fi Prototype
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollToSection("proto")}>
                  User Testing Protocol
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollToSection("key")}>
                  Key Findings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollToSection("final")}>
                  Final Prototype
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollToSection("rfef")}>
                  Reflections
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
