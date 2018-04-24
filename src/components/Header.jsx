import React from 'react';
import { Panel } from 'react-bootstrap';

const headerStyleObj = {
  fontSize: '20px',
};

const Header = () => (
  <Panel className="App-header">
    <Panel.Body
      className="App-title"
      style={headerStyleObj}
    >Welcome to {"Chi's"} Dolls Kill form</Panel.Body>
  </Panel>
);

export default Header;
