import React from 'react';
import Header from './Header';
import Form from './Form';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const appStyleObj = {
  height: '100vh',
  backgroundColor: 'white',
};

const App = () => (
  <div className="App" style={appStyleObj}>
    <Header />
    <Form />
  </div>
);

export default App;
