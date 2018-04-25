import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// style={{ position: 'absolute', bottom: 0, right: '15px' }}
const AscendButton = props => (
  <Button
    active={props.ascendingOrder}
    onClick={props.ascendClickHandler}
    style={props.fontSizeObj}
  > Ascending
  </Button>
);

AscendButton.propTypes = {
  ascendClickHandler: PropTypes.func.isRequired,
  ascendingOrder: PropTypes.bool.isRequired,
  fontSizeObj: PropTypes.objectOf(PropTypes.string).isRequired
};

export default AscendButton;
