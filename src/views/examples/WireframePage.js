import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import WireframeHeader from "components/Headers/WireframeHeader";

function WireframePage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

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
      <ExamplesNavbar />
      <div className="wrapper">
        <WireframeHeader />

        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
              <h4>Initial Iteration</h4>
              <img alt="..." src={require("assets/img/A.png")}></img>
              <img alt="..." src={require("assets/img/B.png")}></img>
              <img alt="..." src={require("assets/img/C.png")}></img>
              <h3>Final Design</h3>
              <img alt="..." src={require("assets/img/f1.png")}></img>
              <img alt="..." src={require("assets/img/f2.png")}></img>
              <h4>Example pathway: Associate software engineer</h4>
              <img alt="..." src={require("assets/img/c1.png")}></img>
              <img alt="..." src={require("assets/img/c2.png")}></img>
              <h4>Example pathway: Medical school student</h4>
              <img alt="..." src={require("assets/img/d1.png")}></img>
              <img alt="..." src={require("assets/img/d2.png")}></img>
              <Button
                className="btn-round"
                color="info"
                size="lg"
                tag={Link}
                to="/"
              >
                Go back to main page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default WireframePage;
