import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      <strong>GitHub Stats</strong>
      </h1>
      <GitHubCalendar
        username="ZJW-92"
        blockSize={18}
        blockMargin={5}
        color="#64ffda"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
