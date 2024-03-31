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
import UserResearchHeader from "components/Headers/UserResearchHeader";

function UserResearchPage() {
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
        <UserResearchHeader />

        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
              <h2 className="title">User Research</h2>
              <h3 className="title" id="1">
                Table of Contents
              </h3>
              <div className="ml-auto mr-auto" style={{ paddingRight: "50px" }}>
                <ul>
                  <div>
                    <Link to="#" onClick={() => scrollToSection("1")}>
                      Career Curious Student - Brandon’s friend
                    </Link>
                  </div>
                  <div>
                    <Link to="#" onClick={() => scrollToSection("2")}>
                      Career Curious Student - Sarah’s friend
                    </Link>
                  </div>
                  <div>
                    <Link to="#" onClick={() => scrollToSection("3")}>
                      Career Curious Student - Anushka’s sister
                    </Link>
                  </div>
                </ul>
              </div>
              <h3 className="title" id="1">
                Career Curious Student - Brandon’s friend
              </h3>
              <div>
                <h3>
                  <em>Identifying Dream Career</em>
                </h3>
                <p>
                  <strong>
                    What are some challenges you have encountered in attempting
                    to identify your dream career?
                  </strong>
                </p>
                <ul>
                  <li>
                    A big challenge I've faced in identifying my dream career is
                    the uncertainty about what truly aligns with my passions and
                    interests. There are so many career options available, and
                    it can be difficult to narrow down which path will bring me
                    the most fulfillment. Societal expectations and familial
                    pressures can sometimes cloud my own understanding of what I
                    truly want to pursue.
                  </li>
                </ul>
                <p>
                  <strong>
                    Even if you do not know your dream career, do you have some
                    idea of what type of career you would like to pursue? This
                    could be related to the work industry, job tasks, work
                    environment or general career characteristics.
                  </strong>
                </p>
                <ul>
                  <li>
                    I am still exploring various possibilities, but I'm drawn to
                    careers that allow me to blend my interests in technology
                    and social impact. I'm particularly interested in roles that
                    involve utilizing emerging technologies to address societal
                    challenges, such as sustainability, healthcare, or
                    education. I value opportunities for continuous learning and
                    personal growth within my career.
                  </li>
                </ul>
                <p>
                  <strong>
                    Do you or have you used any tools to help you identify your
                    dream career? If Yes, what tools did you use? If No, do you
                    know of any tools that you could use?
                  </strong>
                </p>
                <ul>
                  <li>
                    I've experimented with self-assessment tools like
                    StrengthsFinder and Myers-Briggs Type Indicator to gain
                    insights into my strengths, preferences, and personality
                    traits. I've found interviews with professionals in
                    different fields to be incredibly enlightening, providing
                    firsthand perspectives on various career paths.
                  </li>
                </ul>
                <p>
                  <strong>
                    What do or did you find useful about these tools?
                  </strong>
                </p>
                <ul>
                  <li>
                    These tools have been helpful in providing me with a
                    structured framework for self-reflection and exploration.
                    They've allowed me to identify patterns in my interests and
                    strengths, leading me towards potential career paths that
                    align with my values and goals.
                  </li>
                </ul>
                <p>
                  <strong>
                    Are there any additional features you wished the tools
                    provided that would help you identify your dream career?
                  </strong>
                </p>
                <ul>
                  <li>
                    It would be beneficial if these tools could incorporate
                    real-world simulations or immersive experiences to provide a
                    more hands-on understanding of different career paths.
                    Personalized recommendations based on my unique profile and
                    interests would help streamline the exploration process and
                    provide more targeted guidance.
                  </li>
                </ul>

                <h3>
                  <em>Pursuing Dream Career</em>
                </h3>
                <p>
                  <strong>
                    What were some challenges you have encountered in pursuing
                    your dream career?
                  </strong>
                </p>
                <ul>
                  <li>
                    One of the primary challenges I've encountered in pursuing
                    my dream career is the lack of practical experience in my
                    chosen field. While I'm passionate and motivated, breaking
                    into the industry without relevant experience is so tough.
                    Navigating the job market and identifying opportunities that
                    align with my career goals can be challenging.
                  </li>
                </ul>
                <p>
                  <strong>
                    Do you think you have the required skills and resources to
                    pursue your dream career?
                  </strong>
                </p>
                <ul>
                  <li>
                    I think I possess foundational skills such as critical
                    thinking, problem-solving, and communication, but I
                    recognize the need to further develop technical skills
                    specific to my desired field. I'm actively seeking out
                    opportunities for internships, workshops, and online courses
                    to enhance my skill set and make myself more competitive in
                    the job market.
                  </li>
                </ul>
                <p>
                  <strong>
                    Do you or have you used any tools to help you pursue your
                    dream career? If Yes, what tools do or did you use?
                  </strong>
                </p>
                <ul>
                  <li>
                    I've leveraged resources like LinkedIn, professional
                    networking events, and industry-specific forums to connect
                    with professionals and stay updated on job opportunities and
                    industry trends. I've found guidance from career counsellors
                    and mentors who have provided valuable advice and insights.
                  </li>
                </ul>
                <p>
                  <strong>
                    What do or did you find useful about these tools?
                  </strong>
                </p>
                <ul>
                  <li>
                    These tools have been amazing in expanding my professional
                    network, gaining industry insights, and accessing job
                    opportunities. Networking, in particular, has opened doors
                    to interviews, internship opportunities, and mentorship
                    relationships, helping me gain valuable experience and
                    guidance in my desired field.
                  </li>
                </ul>
                <p>
                  <strong>
                    Are there any additional features you wished the tools
                    provided that would help you pursue your dream career?
                  </strong>
                </p>
                <ul>
                  <li>
                    It would be beneficial if these tools could provide more
                    targeted job recommendations based on my skills, interests,
                    and career goals. Access to industry-specific resources,
                    such as online courses or certification programs, tailored
                    to my chosen field would help me further develop my
                    expertise and advance my career aspirations.
                  </li>
                </ul>
              </div>
              <h3 className="title" id="2">
                Career Curious Student - Sarah’s friend
              </h3>
              <div>
                <div>
                  <h3>
                    <em>Identifying Dream Career</em>
                  </h3>
                  <p>
                    <strong>
                      What are some challenges you have encountered in
                      attempting to identify your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      It is hard to determine the best career suited for my
                      skills
                    </li>
                    <li>It is hard to narrow down viable career options</li>
                    <li>Not aware of what all of the career options are</li>
                    <li>Do not know the difference between different roles</li>
                  </ul>
                  <p>
                    <strong>
                      Even if you do not know your dream career, do you have
                      some idea of what type of career you would like to pursue?
                      This could be related to the work industry, job tasks,
                      work environment or general career characteristics.
                    </strong>
                  </p>
                  <ul>
                    <li>Yes</li>
                  </ul>
                  <p>
                    <strong>
                      Do you or have you used any tools to help you identify
                      your dream career? If Yes, what tools did you use? If No,
                      do you know of any tools that you could use?
                    </strong>
                  </p>
                  <ul>
                    <li>UW website programs and future jobs</li>
                    <li>Job postings - Linked in and Indeed</li>
                  </ul>
                  <p>
                    <strong>
                      What do or did you find useful about these tools?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Useful for understanding general starting position
                      qualifications and responsibilities
                    </li>
                    <li>Provide job descriptions</li>
                    <li>
                      Provide examples of what other people with a similar skill
                      set are doing
                    </li>
                  </ul>
                  <p>
                    <strong>
                      Are there any additional features you wished the tools
                      provided that would help you identify your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      If you could put in a job position and the tool would
                      provide you with the next step, journey of the career and
                      skills that you would need
                    </li>
                    <li>
                      If the tool told you what skills would be required along
                      the career path
                    </li>
                    <li>
                      Can filter for types of jobs based on their degree/skills
                    </li>
                  </ul>
                </div>

                <div>
                  <h3>
                    <em>Pursuing Dream Career</em>
                  </h3>
                  <p>
                    <strong>
                      What were some challenges you have encountered in pursuing
                      your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Not having the time and resources to build the required
                      skills
                    </li>
                  </ul>
                  <p>
                    <strong>
                      Do you think you have the required skills and resources to
                      pursue your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>No they believe that they will need to build skills</li>
                  </ul>
                  <p>
                    <strong>
                      Do you or have you used any tools to help you pursue your
                      dream career? If Yes, what tools do or did you use?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Coop and academics are pretty much their only sources of
                      skill development
                    </li>
                  </ul>

                  <p>
                    <strong>
                      Are there any additional features you wished the tools
                      provided that would help you pursue your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>Provides easy access to relevant resources</li>
                    <li>
                      Links to free sites on how to build technical skills
                      (coding and spreadsheets)
                    </li>
                    <li>Provide crash courses on skill development</li>
                    <li>Provide interview prep</li>
                    <li>Help with resume building</li>
                    <li>Be connected with mentors</li>
                  </ul>
                </div>
              </div>
              <h3 className="title" id="3">
                Career Curious Student - Anushka’s sister
              </h3>
              <div>
                <div>
                  <h3>
                    <em>Identifying Dream Career</em>
                  </h3>
                  <p>
                    <strong>
                      What are some challenges you have encountered in
                      attempting to identify your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Identity long-term career that won’t become monotonous
                      overtime
                    </li>
                    <li>Generally looks for new challenges everyday</li>
                  </ul>
                  <p>
                    <strong>
                      Even if you do not know your dream career, do you have
                      some idea of what type of career you would like to pursue?
                      This could be related to the work industry, job tasks,
                      work environment or general career characteristics.
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Curious about the engineering industry, since technology
                      often shapes the modern world
                    </li>
                    <li>
                      Explored programming languages such as Python and Java
                    </li>
                    <li>
                      Worries that programming would become monotonous and
                      socially isolating
                    </li>
                  </ul>
                  <p>
                    <strong>
                      Do you or have you used any tools to help you identify
                      your dream career? If Yes, what tools did you use? If No,
                      do you know of any tools that you could use?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Use Blueprint in highschool to explore future careers
                      using personality quizzes and pathway information
                    </li>
                    <li>
                      Have a mandatory Grade 10 course, Civics and Careers, that
                      teaches students about possible pathways and building
                      resumes, cover letters and interview skills
                    </li>
                  </ul>
                  <p>
                    <strong>
                      What do or did you find useful about these tools?
                    </strong>
                  </p>
                  <ul>
                    <li>Learning more about her own personality</li>
                    <li>Learning about potential university programs</li>
                  </ul>
                  <p>
                    <strong>
                      Are there any additional features you wished the tools
                      provided that would help you identify your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Networking opportunities to learn from professionals in
                      careers, whether that be online meetings and job shadowing
                    </li>
                  </ul>
                </div>

                <div>
                  <h3>
                    <em>Pursuing Dream Career</em>
                  </h3>
                  <p>
                    <strong>
                      What were some challenges you have encountered in pursuing
                      your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Doesn’t have a specific career identified so struggles
                      with which skills and opportunities to focus on
                    </li>
                    <li>Feels spread thin</li>
                  </ul>
                  <p>
                    <strong>
                      Do you think you have the required skills and resources to
                      pursue your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Blueprint and Civics and Careers helps, but is not enough
                    </li>
                    <li>
                      Still lacking an understanding of dream career and
                      required next steps
                    </li>
                  </ul>
                  <p>
                    <strong>
                      Do you or have you used any tools to help you pursue your
                      dream career? If Yes, what tools do or did you use?
                    </strong>
                  </p>
                  <ul>
                    <li>Resume and cover letter from civics & careers</li>
                    <li>
                      Co-op in high school to pursue opportunities in
                      engineering
                    </li>
                  </ul>
                  <p>
                    <strong>
                      What do or did you find useful about these tools?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Well-informed about the requirements when applying for
                      positions
                    </li>
                    <li>Knowledge about the workplace</li>
                  </ul>
                  <p>
                    <strong>
                      Are there any additional features you wished the tools
                      provided that would help you pursue your dream career?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      More opportunity for exploration as throughout the course
                      we are asked to choose on career field which feels like I
                      am being boxed into one future at a young age
                    </li>
                  </ul>
                </div>
              </div>
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

export default UserResearchPage;
