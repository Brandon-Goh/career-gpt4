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
import RawDataHeader from "components/Headers/RawDataHeader";

function RawDataPage() {
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
        <RawDataHeader />

        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
              <h2 className="title">Raw Data for Journey marginTop</h2>
              <img alt="..." src={require("assets/img/p1a.png")}></img>
              <img alt="..." src={require("assets/img/p1b.png")}></img>
              <img alt="..." src={require("assets/img/p2.png")}></img>
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

export default RawDataPage;
