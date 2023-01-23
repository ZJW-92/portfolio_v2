import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      <strong>GitHub Contributions</strong>
      </h1>
      <GitHubCalendar
        username="ZJW-92"
        blockSize={19}
        blockMargin={5}
        color="#64ffda"
        fontSize={19}
      />
    </Row>
  );
}

export default Github;
