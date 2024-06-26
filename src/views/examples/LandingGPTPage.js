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
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="problem">
                  Problem
                </h2>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  There is a lack of clear guidance for individuals who feel
                  overwhelmed or lost in pursuing their dream careers or
                  personal interests. Many people struggle to identify the
                  necessary steps and resources required to achieve their goals,
                  which can lead to feelings of frustration and hopelessness.
                  [1] [2]
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
                        "url(" + require("assets/img/mad.jpeg") + ")",
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
                <Col className="ml-auto mr-auto text-center" md="12">
                  <h2 className="title" id="sis">
                    Situation Impact Statement
                  </h2>
                  <h5
                    className="description"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Design an app to be used by post-secondary students that
                    provides guidance, personalized recommendations and adequate
                    resources for potential careers.
                  </h5>
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
                <h2 className="title" id="solution">
                  Solution
                </h2>
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
                <Col md="12">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/ai.png") + ")",
                      // width: "800px",
                      // marginRight: "99700px",
                    }}
                  ></div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title" id="personas">
              User Personas
            </h2>
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
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="market">
                  Market Research
                </h2>
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
                <Button
                  className="btn-round"
                  color="info"
                  size="lg"
                  tag={Link}
                  to="/market-research"
                >
                  Go to market research
                </Button>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <img alt="..." src={require("assets/img/comr.png")}></img>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="re">
                  User Research
                </h2>

                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  User research is vital for understanding the needs and
                  behaviors of users, ensuring that products and services
                  effectively meet their requirements. By gathering insights
                  through research, teams can validate assumptions, improve user
                  experiences, and drive innovation, ultimately reducing the
                  risk of building unsuccessful products.
                </h5>
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
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title" id="usa">
              Usability Goals
            </h2>
            <div className="team">
              <Row>
                <Col md="3">
                  <div className="team-player">
                    <h4 className="title">Effective to use</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Time to complete tasks
                    </p>
                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <h4 className="title">Efficient to use</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Time to complete tasks<br></br>
                      Error rates
                    </p>
                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <h4 className="title">Has good utility</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Time to complete tasks with available tools
                    </p>
                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <h4 className="title">Easy to remember how to use</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Time to complete tasks<br></br>Error rates
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title" id="use">
              User Experience Goals
            </h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <h4 className="title">Insightful</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Users should feel that the app provides insight into
                      potential career paths and their respective
                      skills/requirements
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <h4 className="title">Effortless</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Users should feel that the experience is effortless while
                      using the system
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <h4 className="title">Personal</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Users should feel that the career suggestions are catered
                      towards their personal goals
                    </p>
                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <h4 className="title">Clear</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Users should feel the information presented on the website
                      is clear
                    </p>
                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <h4 className="title">Confident</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Users should feel confident in their interactions with the
                      website
                    </p>
                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <h4 className="title">Connected</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Users should feel connected with other professionals
                    </p>
                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <h4 className="title">Relevant</h4>
                    <p
                      className="description"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Users should feel that the information presented on the
                      app is relevant for their situation and goals
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="hta">
                  Hierarchical Task Analysis
                </h2>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  A hierarchical task analysis was used to arrange the key
                  functionality into a hierarchical format. This helped
                  determine the main workflows and pages that would be required
                  in the mobile application.
                </h5>
                <img alt="..." src={require("assets/img/wew.png")}></img>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="de">
                  Initial Iteration
                </h2>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  We designed our app to prioritize usability by streamlining
                  tasks, minimizing error rates, and ensuring efficient
                  completion times with intuitive tools. By focusing on these
                  aspects, users can achieve their goals effectively, without
                  frustration or unnecessary hurdles, ultimately enhancing their
                  overall experience. <br></br> In crafting the user experience,
                  our app aims to provide insightful career suggestions tailored
                  to individual goals, ensuring effortless navigation,
                  instilling confidence in user interactions, and presenting
                  clear, relevant information. <br></br>Click below to be taken
                  to the Figma wireframe.
                </h5>
                <a
                  href="https://www.figma.com/proto/PdWFjTgIohiEGbeqe9fBTm/AICareerPal?type=design&node-id=45-789&t=QoHqcL7JiADXbeF6-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=45%3A789&show-proto-sidebar=1&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="..." src={require("assets/img/fig.png")} />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="proto">
                  User Testing Protocol
                </h2>
                <h4>User Experience Research Procedure</h4>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  <ol>
                    <li>
                      Ask users to walk through wireframes, talking aloud about
                      what they are doing, feeling and thinking.
                    </li>
                    <li>
                      User experience flow was analyzed using a user journey map
                      [10].
                    </li>
                    <li>Usability issues were recorded.</li>
                    <li>
                      After each touch point ask the participant about any pain
                      points they encountered and their LTR score from 1-7.
                    </li>
                  </ol>
                </h5>

                <h4 className="title">User Flow - User Journey Map</h4>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Below is the final user journey map, incorporating scores
                  averaged across all participants.
                </h5>
                <img
                  alt="..."
                  src={require("assets/img/journey-map.png")}
                ></img>
                <h2></h2>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Below is a link to the raw data collected for the journey map.
                </h5>
                <Button
                  className="btn-round"
                  color="info"
                  size="lg"
                  tag={Link}
                  to="/raw-data"
                >
                  Go to raw data
                </Button>
                {/* <h4>Round 2: Usability Research Procedure</h4>
              <h5
                className="description"
                style={{ color: "black", fontWeight: "500" }}
              >
                Role Playing: You are a student that is looking to find their
                dream career pathway
                <br />
                Tasks:
              </h5> */}
              </Col>
              {/* <br></br>
            <h5
              className="description"
              style={{ color: "black", fontWeight: "500" }}
            >
              Choose a starting point for your career
              <ul>
                <li>
                  Time to find
                  <ul>
                    <li>Expert:</li>
                  </ul>
                </li>
                <li>
                  Number of errors
                  <ul>
                    <li>Expert:</li>
                  </ul>
                </li>
                <li>
                  Other tools used
                  <ul>
                    <li>None</li>
                  </ul>
                </li>
              </ul>
            </h5>
            <br></br> */}
            </Row>
            {/* <h5
            className="description"
            style={{ color: "black", fontWeight: "500" }}
          >
            Choose a career pathway
            <ul>
              <li>
                Time to find
                <ul>
                  <li>Expert:</li>
                </ul>
              </li>
              <li>
                Number of errors
                <ul>
                  <li>Expert: 0</li>
                </ul>
              </li>
              <li>
                Other tools used
                <ul>
                  <li>Google search to find circulation desk</li>
                  <li>DP floor plan</li>
                </ul>
              </li>
            </ul>
          </h5> */}
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="key">
                  Key Findings
                </h2>
                <img alt="..." src={require("assets/img/kf.png")}></img>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="key">
                  Design Recommendations
                </h2>
                <img alt="..." src={require("assets/img/bgoh.png")}></img>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="final">
                  Final Prototype
                </h2>
                <h3>Design Changes</h3>
                <img alt="..." src={require("assets/img/dcc.png")}></img>
                <br></br>
                <h3></h3>
                <h3>Final Design</h3>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Click below to be taken to the Figma wireframe.<br></br> Left
                  is the associate software engineer path | Right is the medical
                  school student path
                </h5>

                <a
                  href="https://www.figma.com/proto/PdWFjTgIohiEGbeqe9fBTm/AICareerPal?type=design&node-id=126-638&t=QoHqcL7JiADXbeF6-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=126%3A638&show-proto-sidebar=1&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="..." src={require("assets/img/fig.png")} />
                </a>
                <a
                  href="https://www.figma.com/proto/PdWFjTgIohiEGbeqe9fBTm/AICareerPal?type=design&node-id=160-1852&t=QoHqcL7JiADXbeF6-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=160%3A1852&show-proto-sidebar=1&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="..." src={require("assets/img/fig.png")} />
                </a>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  The full wireframes in map view are also provided below.
                </h5>
                <Button
                  className="btn-round"
                  color="info"
                  size="lg"
                  tag={Link}
                  to="/wireframe"
                >
                  Go to full wireframe map
                </Button>
                <br></br>
                <h3></h3>
                <h3>Data Considerations</h3>
                <img alt="..." src={require("assets/img/dc3.png")}></img>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="rfef">
                  Reflections
                </h2>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Throughout the development of AICareerPal, our team
                  encountered various obstacles and made numerous decisions that
                  ultimately shaped the final product.
                </h5>
                <br></br>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  One of the most significant challenges we faced was balancing
                  the complexity of career guidance with the need for simplicity
                  in user experience. We wanted AICareerPal to provide
                  comprehensive support for users while ensuring that the
                  interface remained intuitive and easy to navigate. This
                  required careful consideration of information architecture and
                  content presentation, as well as frequent iteration based on
                  user feedback.
                </h5>
                <br></br>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Incorporating principles of cognitive ergonomics was crucial
                  in ensuring that AICareerPal facilitated effective
                  decision-making and task completion for users. By optimizing
                  the design to align with cognitive processes, such as
                  attention, memory, and problem-solving, we aimed to reduce
                  cognitive load and enhance user satisfaction. Techniques such
                  as chunking information, minimizing distractions, and
                  providing clear cues were crutial in creating a seamless user
                  experience.
                </h5>
                <br></br>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Another key learning experience was the importance of clarity
                  in communication. We discovered that users often struggled to
                  understand certain aspects of the app, such as the available
                  career options and the steps required to pursue them. As a
                  result, we realized the need to improve our messaging and
                  provide more context to guide users effectively through their
                  career exploration journey.
                </h5>
                <br></br>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Additionally, the process of conducting user research and
                  testing was invaluable in shaping the direction of
                  AICareerPal. By gathering feedback from individuals
                  representing different user personas, we gained valuable
                  insights into their needs, preferences, and pain points. This
                  informed our design decisions and helped us prioritize
                  features that would have the greatest impact on user
                  satisfaction and success.
                </h5>
                <br></br>
                <h5
                  className="description"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Looking back on our work, we're proud of what we've
                  accomplished with AICareerPal. We believe that the app has the
                  potential to make a meaningful difference in the lives of
                  individuals seeking guidance and support in their career
                  journeys.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title" id="">
                  References
                </h2>
                <img alt="..." src={require("assets/img/refer2.png")}></img>
              </Col>
            </Row>
          </Container>
        </div>
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
