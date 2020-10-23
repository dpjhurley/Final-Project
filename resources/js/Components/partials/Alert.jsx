import React from 'react';
import { Alert } from 'reactstrap';

const DismissableAlert = ({
    message
}) => {
  

  return (
    <Alert className="warning" color="warning" >
      {message}
    </Alert>
  );
}

export default DismissableAlert;