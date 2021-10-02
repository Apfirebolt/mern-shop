import React from "react";
import TestContainer from "../components/TestComponent";

const TestPage = ({ match }) => {
  return (
    <>
      <h2>Test Page</h2>
      <TestContainer>
        <p>Sample content inside test.</p>
      </TestContainer>
    </>
  );
};

export default TestPage;
