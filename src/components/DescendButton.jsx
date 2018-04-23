import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// style={{ position: 'absolute', bottom: 0, right: '15px' }}
const DescendButton = props => (
  <Button
    active={!props.ascendingOrder}
    onClick={props.descendClickHandler}
  > Descending Order
  </Button>
);

DescendButton.propTypes = {
  descendClickHandler: PropTypes.func.isRequired,
  ascendingOrder: PropTypes.bool.isRequired,
};

export default DescendButton;
