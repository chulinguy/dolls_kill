import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const oddStyleObj = { backgroundColor: '#FFFFF0', marginRight: '0px' };
const evenStyleObj = { backgroundColor: '#F0FFF0', marginRight: '0px' };

const List = props => (
  <div>
    <h5><strong>{props.title}</strong></h5>
    <ul>
      {props.items.map((item, i) => (
        <Row
          key={item.prod_id + item.size}
          style={i % 2 ? oddStyleObj : evenStyleObj}
        >
          <li >
            <Col xs={12} sm={3}> Quantity: {`${item.quantity} `}</Col>
            <Col xs={12} sm={5}> Product ID: {`${item.prod_id} `}</Col>
            <Col xs={12} sm={4}> Size: {`${item.size} `}</Col>
          </li>
        </Row>
      ))}
    </ul>
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default List;
