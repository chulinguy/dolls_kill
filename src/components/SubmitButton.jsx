import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// style={{ position: 'absolute', bottom: 0, right: '15px' }}
const SubmitButton = props => (
  <Button
    bsStyle="primary"
    type="submit"
    value="Submit"
    disabled={props.disableSubmit}
    onMouseEnter={props.submitHoverHandler}
    onMouseLeave={props.submitHoverHandler}
    style={props.fontSizeObj}
  > Submit
  </Button>
);

SubmitButton.propTypes = {
  disableSubmit: PropTypes.bool.isRequired,
  submitHoverHandler: PropTypes.func.isRequired,
  fontSizeObj: PropTypes.objectOf(PropTypes.string).isRequired
};

export default SubmitButton;

