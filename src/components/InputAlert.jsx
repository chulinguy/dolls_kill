import React from 'react';
// import { Alert } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';

const InputAlert = () => (
  // <Alert bsStyle="warning">
  //   Please make sure your input consists of only digits ( 0 - 9) and commas.
  // </Alert>
  <Popover
    id="popover-basic"
    placement="right"
    positionLeft={85}
    positionTop={120}
    title="Inpute reminder"
  >
    Please make sure your input consists of only <strong>digits</strong> (0 - 9) and <strong>commas</strong>.
  </Popover>

);

export default InputAlert;
