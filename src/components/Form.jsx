import React, { Component } from 'react';
import { retrieveData } from '../util';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      prod_id: '',
      results: [],
    };
    this.handleProdIdChange = this.handleProdIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProdIdChange(event) {
    this.setState({ prod_id: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { prod_id } = this.state;
    retrieveData(prod_id, this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="product_id">
          Product IDs:
          <input type="text" value={this.state.prod_id} onChange={this.handleProdIdChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
