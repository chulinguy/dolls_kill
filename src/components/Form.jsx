import React, { Component } from 'react';
import { retrieveData, inputValidator, spaceTrimmer, rightAmountOfCommas } from '../util';
import InputAlert from './InputAlert';
import List from './List';
import AscendButton from './AscendButton';
import DescendButton from './DescendButton';
import SubmitButton from './SubmitButton';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      prod_id: '',
      emptyStocks: [],
      availStocksAscend: [],
      availStocksDescend: [],
      ascendingOrder: true,
      disableSubmit: true,
      submitHover: false,
    };
    this.prodIdChangeHandler = this.prodIdChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.ascendClickHandler = this.ascendClickHandler.bind(this);
    this.descendClickHandler = this.descendClickHandler.bind(this);
    this.submitHoverHandler = this.submitHoverHandler.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  prodIdChangeHandler(event) {
    this.setState({ prod_id: event.target.value });
    this.submitButtonDisablingUpdate(event.target.value);
  }

  submitHandler(event) {
    event.preventDefault();
    const prod_id_sanitized = rightAmountOfCommas(spaceTrimmer(this.state.prod_id));
    retrieveData(prod_id_sanitized, this);
  }

  submitButtonDisablingUpdate(str) {
    this.setState({ disableSubmit: !inputValidator(rightAmountOfCommas(spaceTrimmer(str))) });
  }

  submitHoverHandler() {
    const oldHover = this.state.submitHover;
    this.setState({ submitHover: !oldHover });
  }

  ascendClickHandler() {
    this.setState({ ascendingOrder: true });
  }

  descendClickHandler() {
    this.setState({ ascendingOrder: false });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="product_id">
            Product IDs:
            <input type="text" value={this.state.prod_id} onChange={this.prodIdChangeHandler} />
          </label>
          {this.state.submitHover && this.state.disableSubmit && this.state.prod_id ? <InputAlert /> : null}
          <SubmitButton
            disableSubmit={this.state.disableSubmit}
            submitHoverHandler={this.submitHoverHandler}
          />
        </form>
        <AscendButton
          ascendClickHandler={this.ascendClickHandler}
          ascendingOrder={this.state.ascendingOrder}
        />
        <DescendButton
          descendClickHandler={this.descendClickHandler}
          ascendingOrder={this.state.ascendingOrder}
        />
        <List
          items={this.state.ascendingOrder ? this.state.availStocksAscend : this.state.availStocksDescend}
          title="In-stock Items"
        />
        <List
          items={this.state.emptyStocks}
          title="Out-of-stock Items"
        />
      </div>
    );
  }
}

export default Form;
