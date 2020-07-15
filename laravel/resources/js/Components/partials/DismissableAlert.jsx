import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const DismissableAlert = ({
    message
}) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="warning" isOpen={visible} toggle={onDismiss}>
      {/* {message} */}
      This is a warning alert — check it out!

    </Alert>
  );
}

export default DismissableAlert;