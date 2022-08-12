import React from "react";
import Alert from "react-bootstrap/Alert";

const Error = ({ inputError, setInputError }) => {
  return (
    <Alert variant="danger" onClose={() => setInputError(false)} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        You must enter alteast <strong className="text-dark">3</strong> letter to search for a movie :(
      </p>
    </Alert>
  );
};

export default Error;
