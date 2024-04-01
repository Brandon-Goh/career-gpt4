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
import MarketResearchHeader from "components/Headers/MarketResearchHeader";

function MarketResearchPage() {
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
        <MarketResearchHeader />

        <Container>
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
                        <td style={{ border: "1px solid black", width: "60%" }}>
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
                          This tool uses an AI model to write resumes and cover
                          letters for specific jobs.
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
                                Assessments to figure out career starting point
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
                          <a href="https://myblueprint.ca/">Blueprint</a>
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          A tool used in high school to help students figure out
                          an appropriate career path and then take appropriate
                          courses in preparation for applying to relevant
                          university programs.
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <ul>
                            <li>Personality quiz for career selection</li>
                            <li>University program recommendations</li>
                            <li>Course planning guide</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black" }}>
                          <a href="https://careergpt.xyz/">CareerGPT</a>
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          An AI tool that helps connect professionals with
                          appropriate career coaches.
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <ul>
                            <li>Resume review</li>
                            <li>Candidate search</li>
                            <li>Recruiter search</li>
                            <li>Career coach connection</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </p>
              </Col>
            </Row>
            <Button
              className="btn-round"
              color="info"
              size="lg"
              tag={Link}
              to="/"
            >
              Go back to main page
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default MarketResearchPage;
