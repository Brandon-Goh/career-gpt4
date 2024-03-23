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

function LandingGPTPage() {
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
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">Problem</h2>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  There is a lack of clear guidance for individuals who feel
                  overwhelmed or lost in pursuing their dream careers or
                  personal interests. Many people struggle to identify the
                  necessary steps and resources required to achieve their goals,
                  which can lead to feelings of frustration and hopelessness.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")",
                      width: "500px",
                    }}
                  >
                    {/* <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p> */}
                  </div>
                  {/* <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")",
                    }}
                  ></div> */}
                </Col>
                <Col md="5">
                  {/* <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")",
                    }}
                  ></div> */}
                  <h3>More specifically...</h3>
                  <p>
                    <ul
                      style={{
                        listStyleType: "circle",
                        textAlign: "left",
                        width: "600px",
                        color: "black",
                        fontWeight: "500",
                      }}
                    >
                      <li>
                        Understanding the common challenges and barriers
                        individuals face when trying to pursue their dream
                        careers or personal interests.
                      </li>
                      <li>
                        Identifying the specific skills, qualifications, and
                        experiences required for various career paths or
                        personal goals.
                      </li>
                      <li>
                        Investigating the availability and effectiveness of
                        existing career guidance resources and platforms.
                      </li>
                      <li>
                        Exploring the preferences and behaviors of users when
                        seeking career advice or skill development opportunities
                        online.
                      </li>
                      <li>
                        Assessing the impact of personalized guidance and
                        practical steps on individuals&apos; motivation and
                        success in achieving their goals.
                      </li>
                    </ul>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div
          className="section section-about-us"
          style={{
            paddingTop: "0px",
            paddingBottom: "20px",
            marginTop: "-50px",
            marginBottom: "0",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">Solution</h2>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  AICareerPal aims to bridge this gap by providing tailored
                  advice and resources to help users navigate their career paths
                  with confidence and clarity.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="5">
                  <h3>Features:</h3>
                  <p>
                    <ul
                      style={{
                        listStyleType: "circle",
                        textAlign: "left",
                        width: "700px",
                        color: "black",
                        fontWeight: "500",
                      }}
                    >
                      <li>
                        Understanding the common challenges and barriers
                        individuals face when trying to pursue their dream
                        careers or personal interests.
                      </li>
                      <li>
                        Identifying the specific skills, qualifications, and
                        experiences required for various career paths or
                        personal goals.
                      </li>
                      <li>
                        Investigating the availability and effectiveness of
                        existing career guidance resources and platforms.
                      </li>
                      <li>
                        Exploring the preferences and behaviors of users when
                        seeking career advice or skill development opportunities
                        online.
                      </li>
                      <li>
                        Assessing the impact of personalized guidance and
                        practical steps on individuals&apos; motivation and
                        success in achieving their goals.
                      </li>
                    </ul>
                  </p>
                </Col>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")",
                      width: "500px",
                      marginLeft: "300px",
                    }}
                  ></div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">Market Research</h2>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Competitors help users determine the next job or career path.
                  They also support users throughout the job application process
                  - finding jobs, writing resumes, submitting forms, preparing
                  for interviews, etc. However, they don’t allow users to define
                  their end goal (ex. dream job) and provide guidance on how to
                  get there.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="5">
                  <p style={{ color: "black", fontWeight: "500" }}>
                    <table
                      style={{
                        width: "1200px",
                        borderCollapse: "collapse",
                        border: "1px solid black",
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={{ border: "1px solid black" }}>
                            Competitor
                          </th>
                          <th style={{ border: "1px solid black" }}>
                            Description
                          </th>
                          <th style={{ border: "1px solid black" }}>
                            Main Features
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px solid black" }}>
                            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">
                              LinkedIn
                            </a>
                            <br></br>
                            {/* <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                              alt="LinkedIn Logo"
                              style={{
                                width: "50px",
                                margin: "auto",
                                display: "block",
                              }}
                            /> */}
                          </td>
                          <td
                            style={{ border: "1px solid black", width: "60%" }}
                          >
                            This tool is a social networking platform focused on
                            employment. It uses AI algorithms for suggesting
                            network connections, making job recommendations, and
                            populating social media feed.
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            <ul>
                              <li>Potential employees:</li>
                              <ul>
                                <li>Job recommendations</li>
                                <li>Connection recommendations</li>
                                <li>AI-assisted messages</li>
                              </ul>
                              <li>Employers:</li>
                              <ul>
                                <li>Generating job descriptions</li>
                              </ul>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px solid black" }}>
                            <a href="https://www.jobcopy.io/">Jobcopy</a>
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            This tool uses an AI model to write resumes and
                            cover letters for specific jobs.
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            <ul>
                              <li>Job-seekers:</li>
                              <ul>
                                <li>Job compatibility calculator</li>
                                <li>Resume generator</li>
                                <li>Cover letter generator</li>
                                <li>Interview Q&A generator</li>
                              </ul>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px solid black" }}>
                            <a href="https://applypass.com/">ApplyPass</a>
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            This tool automatically matches profiles to jobs and
                            applies on behalf of the applicant using AI.
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            <ul>
                              <li>Job-appliers:</li>
                              <ul>
                                <li>Profile matching with jobs</li>
                                <li>
                                  Auto-fill and submissions of job applications
                                </li>
                              </ul>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px solid black" }}>
                            <a href="https://www.finalroundai.com/interview-copilot">
                              Final Round AI
                            </a>
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            This tool uses AI-powered chatbots to help prepare
                            users for interviews. It is also used unethically
                            during actual interviews.
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            <ul>
                              <li>Job-interviewers:</li>
                              <ul>
                                <li>Live transcription</li>
                                <li>AI-powered mock interviews</li>
                                <li>Technical assessment support</li>
                                <li>Case analysis support</li>
                              </ul>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px solid black" }}>
                            <a href="https://www.futurefit.ai/">FutureFit AI</a>
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            Given a career starting point, this tool helps
                            navigate users to the best career destination by
                            sharing learning opportunities, resources, and jobs.
                            Recommendations are based on an AI model that
                            leverages data related to the labor market.
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            <ul>
                              <li>Career-seekers:</li>
                              <ul>
                                <li>
                                  Assessments to figure out career starting
                                  point
                                </li>
                                <li>Recommendations for career destination</li>
                                <li>Educational programs to teach skills</li>
                                <li>Resources for job preparation</li>
                                <li>Work opportunities</li>
                              </ul>
                              <li>Career coaches:</li>
                              <ul>
                                <li>Send resources</li>
                                <li>Track progress</li>
                                <li>Document notes</li>
                              </ul>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px solid black" }}>
                            Blueprint
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            A tool used in high school to help students figure
                            out an appropriate career path and then take
                            appropriate courses in preparation for applying to
                            relevant university programs.
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            <ul>
                              <li>Personality quiz for career selection</li>
                              <li>University program recommendations</li>
                              <li>Course planning guide</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">User Personas</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg")}
                    ></img>
                    <h4 className="title">Career Focused Student</h4>
                    <p className="category text-info">Persona one</p>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      A user who knows their dream career and have been able to
                      find work opportunities in the field.
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button> */}
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">Career Starter Student</h4>
                    <p className="category text-info">Persona two</p>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      A user who knows their dream career, however, they do not
                      know how to pursue it.
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button> */}
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg")}
                    ></img>
                    <h4 className="title">Career Curious Student</h4>
                    <p className="category text-info">Persona three</p>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      A user who does not have a dream career but would like to
                      determine one.
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button> */}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
              <h2 className="title">User Research</h2>
              <Button
                className="btn-round"
                color="info"
                size="lg"
                tag={Link}
                to="/user-research"
              >
                Go to user research
              </Button>
            </Col>
          </Row>
        </Container>
        {/* <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingGPTPage;
