import React from 'react';
import { Alert } from 'react-bootstrap';

const InputAlert = () => (
  <Alert bsStyle="warning">
    Please make sure your input consists of only digits ( 0 - 9) and commas.
  </Alert>
);

export default InputAlert;
