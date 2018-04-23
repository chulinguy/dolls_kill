import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// style={{ position: 'absolute', bottom: 0, right: '15px' }}
const AscendButton = props => (
  <Button
    active={props.ascendingOrder}
    onClick={props.ascendClickHandler}
  > Ascending Order
  </Button>
);

AscendButton.propTypes = {
  ascendClickHandler: PropTypes.func.isRequired,
  ascendingOrder: PropTypes.bool.isRequired,
};

export default AscendButton;
