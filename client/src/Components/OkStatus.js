import React from "react";

//bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


const OkStatus = ({ setOkayStatus }) => {
  return (
    <div>
      <Alert variant="success" onClose={() => setOkayStatus(false)} dismissible>
        <Alert.Heading>Done :)</Alert.Heading>
        <p>
          You can check the changes you have made :)
        </p>
      </Alert>
    </div>
  );
};

export default OkStatus;
