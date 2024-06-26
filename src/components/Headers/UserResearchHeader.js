import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function UserResearchHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">User Research</h1>
            <div className="text-center">
              <h3>
                User research is vital for understanding the needs and behaviors
                of users, ensuring that our product effectively meet their
                requirements.
              </h3>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default UserResearchHeader;
