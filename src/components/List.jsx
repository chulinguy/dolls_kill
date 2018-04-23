import React from 'react';
import PropTypes from 'prop-types';

const List = props => (
  <div>
    <h6>{props.title}</h6>
    <ul>
      {props.items.map((item) => (
        <li key={item.prod_id + item.size}>
          Product ID: {`${item.prod_id} `}
          Size: {`${item.size} `}
          Quantity: {`${item.quantity} `}
        </li>
      ))}
    </ul>
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default List;
