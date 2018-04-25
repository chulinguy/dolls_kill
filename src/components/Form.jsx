import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
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
  // componentDidMount() {
  //   console.log(document.documentElement.clientWidth);
  // }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

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
    const inputStyleObj = { marginBottom: '10px' };
    const fontSizeObj = document.documentElement.clientWidth > 375 ? { fontSize: '14px' } : { fontSize: '10px' };
    const listStyleObj = document.documentElement.clientWidth > 375 ? { width: '50%' } : { width: '100%' };

    return (
      <Grid fluid>
        <form onSubmit={this.submitHandler}>
          <FormGroup controlId="formUserInput">
            <ControlLabel>
              Product IDs:
            </ControlLabel>
            <FormControl
              type="text"
              value={this.state.prod_id}
              placeholder="Enter Product IDs, e.g. 143249, 142593 ..."
              onChange={this.prodIdChangeHandler}
              style={inputStyleObj}
            />
            {this.state.submitHover && this.state.disableSubmit && this.state.prod_id ? <InputAlert /> : null}
            <Row>
              <Col xs={4}>
                <SubmitButton
                  disableSubmit={this.state.disableSubmit}
                  submitHoverHandler={this.submitHoverHandler}
                  fontSizeObj={fontSizeObj}
                />
              </Col>
              <Col xs={4} className="text-center">
                <AscendButton
                  ascendClickHandler={this.ascendClickHandler}
                  ascendingOrder={this.state.ascendingOrder}
                  fontSizeObj={fontSizeObj}
                />
              </Col>
              <Col xs={4}>
                <DescendButton
                  descendClickHandler={this.descendClickHandler}
                  ascendingOrder={this.state.ascendingOrder}
                  fontSizeObj={fontSizeObj}
                />
              </Col>
            </Row>
          </FormGroup>
        </form>
        <Row>
          <Col xs={6} style={listStyleObj}>
            <List
              items={this.state.ascendingOrder ? this.state.availStocksAscend : this.state.availStocksDescend}
              title="In-stock Items"
            />
          </Col>
          <Col xs={6} style={listStyleObj}>
            <List
              items={this.state.emptyStocks}
              title="Out-of-stock Items"
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Form;
