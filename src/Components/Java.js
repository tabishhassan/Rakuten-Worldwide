import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Slider from "react-native-slider";
import Modal from "modal-enhanced-react-native-web";
import styles from "./styles";
import { CheckBox } from "react-native-elements";
import QRCode from "react-native-qrcode";

const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
export default class Java extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSum: 5000,
      pressed: false,
      tu: "nothing",
      slider: 0,
      text: "ok",
      checked: false,
      url: "http://facebook.github.io/react-native/ "
    };
  }
  login() {
    const formValues = this.formGenerator.getValues();
    console.log("FORM VALUES", formValues);
  }
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this._renderButton("Close", () => this.setState({ visibleModal: null }))}
    </View>
  );
  displaytest() {
    if (this.state.pressed == false) {
      this.state.pressed = true;
      console.log(this.state.pressed);
      var ab = <Text>false</Text>;
    } else {
      this.state.pressed = false;
      console.log(this.state.pressed);
      var ab = <Text>true</Text>;
    }
    this.forceUpdate();
    return ab;
  }

  square() {
    let example = () => {
      let numbers = [];
      for (let number of arguments) {
        numbers.push(number * number);
      }
      return numbers;
    };
    return example();
  }
  render() {
    return (
      <View>
        {this._renderButton("Default modal", () =>
          this.setState({ visibleModal: 1 })
        )}
        <CheckBox
          center
          title="Click Here"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        <Slider
          value={this.state.slider}
          minValue={0}
          maxValue={100}
          step={1 / 3}
          onValueChange={slider => this.setState({ slider })}
        />
        <Text>{this.state.slider}</Text>
        <Button onPress={() => (this.state.tu = this.displaytest())} />
        <Text>{this.state.tu}</Text>
        <Text>{this.props.rts} test</Text>
        {this.square(2, 4, 7, 8, 11, 21)}
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}
