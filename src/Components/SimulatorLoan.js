import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  WebBrowser,
  TextInput,
  Picker
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

class SimulatorLoan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      total: 0,
      color: 0
    };
  }
  updateColor = value => {
    this.setState({ color: value });
  };
  render() {
    return (
      <View>
        <View>
          <Text>Amount</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <View>
          <Text>Loan term</Text>
          <Picker
            selectedValue={this.state.color}
            onValueChange={this.updateColor}
          >
            <Picker.Item label="3" value="3" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="12" value="12" />
          </Picker>
        </View>
        <View>
          <Text>Nominal Rate</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        {this.state.total}
        <Text>{this.state.color * 2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default SimulatorLoan;
