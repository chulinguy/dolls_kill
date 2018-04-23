import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// style={{ position: 'absolute', bottom: 0, right: '15px' }}
const SubmitButton = props => (
  <Button
    type="submit"
    value="Submit"
    disabled={props.disableSubmit}
    onMouseEnter={props.submitHoverHandler}
    onMouseLeave={props.submitHoverHandler}
  > Submit
  </Button>
);

SubmitButton.propTypes = {
  disableSubmit: PropTypes.bool.isRequired,
  submitHoverHandler: PropTypes.func.isRequired,
};

export default SubmitButton;

