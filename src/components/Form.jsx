import React, { Component } from 'react';
import { retrieveData, inputValidator, spaceTrimmer, rightAmountOfCommas } from '../util';
import InputAlert from './InputAlert';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      prod_id: '',
      jsonData: null,
      invalidInputWarning: false,
    };
    this.handleProdIdChange = this.handleProdIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProdIdChange(event) {
    this.setState({ prod_id: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const prod_id_sanitized = rightAmountOfCommas(spaceTrimmer(this.state.prod_id));

    if (inputValidator(prod_id_sanitized)) {
      this.setState({ invalidInputWarning: false });
      retrieveData(prod_id_sanitized, this);
    } else if (prod_id_sanitized) {
      this.setState({ invalidInputWarning: true });
    }
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  standardizeJsonData() {
    const { jsonData } = this.state;
    const output = [];
    Object.keys(jsonData).forEach(prod_id => {
      Object.keys(jsonData[prod_id]).forEach(size_id => {
        const itemObj = {
          [prod_id]: {
            size: jsonData[prod_id][size_id].size_text,
            quantity: jsonData[prod_id][size_id].quantity,
          }
        };
        output.push(itemObj);
      });
    });
    return output;
  }

  render() {
    if (this.state.jsonData) {
      console.log('sanitized', this.standardizeJsonData());
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="product_id">
          Product IDs:
          <input type="text" value={this.state.prod_id} onChange={this.handleProdIdChange} />
        </label>
        {this.state.invalidInputWarning ? <InputAlert /> : null}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
