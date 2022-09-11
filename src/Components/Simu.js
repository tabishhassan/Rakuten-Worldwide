import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import "./main.css";

class Simulatorloan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1000,
      sum: 84,
      rate: 1.99,
      time: 12
    };
  }

  handleChange(event) {
    const value = event.target.value;
    if (value > 50000 || (!/^\d+$/.test(event.target.value) && value != 0)) {
      this.setState({ amount: 1000 });
    } else
      this.setState({ amount: value }, () => {
        this.formula(this.state.time, this.state.amount, this.state.rate);
      });
  }

  handleChangeMonth(event) {
    const value = event.target.value * 3;
    this.setState({ time: value }, () => {
      this.formula(this.state.time, this.state.amount, this.state.rate);
    });
  }

  handleChangeRate(event) {
    const value = event.target.value / 100;
    this.setState({ rate: value }, () => {
      this.formula(this.state.time, this.state.amount, this.state.rate);
    });
  }

  formula(time, amount, rate) {
    var total = 0;
    var x = 1;
    while (x <= time) {
      var nbr =
        (parseFloat(amount) / time) *
        (1 + (parseFloat(rate) / 100 / 12) * (time - x + 1));
      total = parseFloat(total) + parseFloat(nbr);
      x++;
    }
    total = (total / time).toFixed(0);
    this.setState({ sum: total });
  }

  render() {
    return (
      <div>
        <section id="loans" className="product-family">
          <div className="product-title">
            <div
              className="product-title-line"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product-icon">
                <img src="/assets/img/icon-loan.jpg" alt="" />
              </div>
              <h3>Loans</h3>
            </div>
            <p className="caption" data-aos="fade-up" data-aos-delay="150">
              Rakuten Europe Bank is providing short term loans to qualifying
              Rakuten France merchants
            </p>
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <p className="column">
                We are proposing multiple lending products to give flexibility
                to our merchants* to finance their working capital requirements.
              </p>
              <p className="column">
                Pick the term that suits you best from 3 to 12 months and enjoy
                competitive rates fixed for the duration of the term.
              </p>
            </div>
            <div className="alert-loans">
              <p>
                *Please note that the loan product is exclusively limited to
                those Rakuten France merchants domiciled in France who meet the
                qualifying criteria
              </p>
            </div>
            <a
              href="#"
              className="plain-button"
              data-modal="contact:loan"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <span className="text">Contact us</span>
              <span className="over">Contact us</span>
            </a>
            <div className="simulatorloan">
              <h3>Calculate your monthly repayments</h3>
              <div className="columns">
                <div className="column">
                  <div className="inputloan">
                    <p>Amount</p>
                    <input
                      name="amount"
                      value={this.state.amount}
                      onChange={this.handleChange.bind(this)}
                      id="amount"
                    />
                    <div className="columns">
                      <div className="column">
                        {" "}
                        <p>min. 1.000 €</p>{" "}
                      </div>
                      <div className="column right-loan">
                        {" "}
                        <p>max. 50.000 €</p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="inputloan">
                    <div className="title-input">
                      <p>
                        Loan term : <span id="valuetimeloan"> </span>
                        {this.state.time} Months
                      </p>
                    </div>
                    <input
                      type="range"
                      name="time"
                      className="slider"
                      id="timeloan"
                      onChange={this.handleChangeMonth.bind(this)}
                      min="1"
                      max="4"
                    />
                    <div className="columns">
                      <div className="column">
                        {" "}
                        <p>3 months</p>{" "}
                      </div>
                      <div className="column right-loan">
                        {" "}
                        <p>12 months</p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="inputloan">
                    <div className="title-input">
                      <p>
                        Nominal Rate :{" "}
                        <span id="valuerateloan">{this.state.rate}</span> %
                      </p>
                    </div>
                    <input
                      type="range"
                      name="rate"
                      className="slider"
                      id="rateloan"
                      onChange={this.handleChangeRate.bind(this)}
                      min="199"
                      max="999"
                    />
                    <div className="columns">
                      <div className="column">
                        {" "}
                        <p>1.99 %</p>{" "}
                      </div>
                      <div className="column right-loan">
                        {" "}
                        <p>9.99 %</p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column recap">
                  <h4> Summary </h4>
                  <p>
                    {" "}
                    Amount of the loan :{" "}
                    <span id="showamount">{this.state.amount}</span> €
                  </p>
                  <p>
                    {" "}
                    Nominal Rate : <span id="showrateloan" />
                    {this.state.rate} %
                  </p>
                  <p>
                    {" "}
                    Monthly instalment :{" "}
                    <span id="showmonthly">{this.state.sum} </span> €
                  </p>
                  <div className="info-loan">
                    <p>
                      This simulation gives you an estimate of the monthly
                      payments and is not binding on Rakuten Europe Bank in any
                      way whatsoever. For a specific quotation, please contact
                      our sales team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Simulatorloan;
