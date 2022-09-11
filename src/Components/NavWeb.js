import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import ScrollableAnchor from "react-scrollable-anchor";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav id="nav" className="nav" role="navigation">
        <a href="#" className="burger-button show-for-small" />
        <ul className="nav-links hide-for-small">
          <li>
            <a href="#simu" className="">
              Loans
            </a>
          </li>
          <li>
            <a href="#factoring" className="current">
              Factoring
            </a>
          </li>
          <li>
            <a href="#rsp" className="">
              RSP
            </a>
          </li>
          <li>
            <a href="#documentation" className="">
              Documentation
            </a>
          </li>
          <li>
            <a href="#about" className="">
              About us
            </a>
          </li>
          <li>
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

const styles = StyleSheet.create({});

export default Nav;
