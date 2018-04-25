import React from 'react';
import { Panel } from 'react-bootstrap';

const headerStyleObj = {
  fontSize: '20px',
  backgroundColor: 'black',
  color: 'white',
};

const rockSaltObj = {
  fontFamily: 'Rock Salt',
  color: 'red',
};

const Header = () => (
  <Panel
    className="App-header"
    style={headerStyleObj}
  >
    <Panel.Body
      className="App-title"
    >
      Welcome to {"Chi's"} <span style={rockSaltObj}>Dolls Kill</span> Inventory Checker
    </Panel.Body>
  </Panel>
);

export default Header;
