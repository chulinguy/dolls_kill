import React from 'react';
import PropTypes from 'prop-types';

const List = props => (
  <div>
    <h6>{props.title}</h6>
    <ol>
      {props.items.map(item => (
        <li>{item.name}</li>
      ))}
    </ol>
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default List;
