import React, { Component } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import * as RomanNumerals from "../../services/RomanNumerals";

class Converter extends Component {
  constructor() {
    super();
    this.state = {
      inputArabic: "",
      inputRoman: "",
      errors: {
        toRoman: "",
        fromRoman: ""
      }
    };
  }
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    const isRomanNumber = /^M{0,3}(?:C[MD]|D?C{0,3})(?:X[CL]|L?X{0,3})(?:I[XV]|V?I{0,3})$/i;
    const isNumberRange = /^(?:0*(?:[0-9]|[1-9][0-9][0-9]?|[1-4][0-9][0-9][0-9])?|4999?)$/gm;

    switch (name) {
      case "inputArabic":
        if (value === "") {
          this.setState({
            inputRoman: ""
          });
        }
        if (isNumberRange.test(value)) {
          errors.toRoman = "";
          let romanNumber = RomanNumerals.toRoman(value);
          this.setState({
            inputRoman: romanNumber
          });
        } else {
          errors.toRoman = "Please enter a valid number!";
        }
        break;

      case "inputRoman":
        if (value === "") {
          this.setState({
            inputArabic: ""
          });
        } else if (isRomanNumber.test(value)) {
          errors.fromRoman = "";
          let arabicNumber = RomanNumerals.fromRoman(value);
          this.setState({
            inputArabic: arabicNumber
          });
        } else {
          errors.fromRoman = "Enter only roman numerals";
        }
        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="converter">
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="arabicNumber">
                  <Form.Control
                    type="text"
                    name="inputArabic"
                    value={this.state.inputArabic}
                    onChange={this.handleChange}
                    placeholder="Enter number"
                  />
                  {errors.toRoman.length > 0 && (
                    <Alert variant={"danger"}>{errors.toRoman}</Alert>
                  )}
                </Form.Group>
              </Col>
              <Col xs="1" className="equal-sign">
                <span> = </span>
              </Col>
              <Col>
                <Form.Group controlId="romanNumber">
                  <Form.Control
                    type="text"
                    name="inputRoman"
                    value={this.state.inputRoman}
                    onChange={this.handleChange}
                    placeholder="Enter roman number"
                  />
                  {errors.fromRoman.length > 0 && (
                    <Alert variant={"danger"}>{errors.fromRoman}</Alert>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Converter;
