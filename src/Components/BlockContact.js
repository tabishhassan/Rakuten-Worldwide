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
  TouchableOpacity
} from "react-native";
import { NativeRouter, Route, Link, Redirect } from "react-router-native";
import Modal from "modal-enhanced-react-native-web";
import ContactForm from "./ContactForm";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderButtonExit = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <ContactForm />
      <View style={styles.close}>
        {this._renderButtonExit("X", () =>
          this.setState({ visibleModal: null })
        )}
      </View>
    </View>
  );
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.block}>
            <Text style={styles.text}>
              Would you like to know more about Rakuten Europe Bank ?
            </Text>
            {this._renderButton("Contact us", () =>
              this.setState({ visibleModal: 1 })
            )}
          </View>
        </View>
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 370,
    backgroundColor: "#bf0000"
  },
  text: {
    textAlign: "center",
    fontSize: "26px",
    color: "white",
    fontFamily: "Gilroy-UltraLight"
  },
  block: {
    top: "45%",
    width: "50%",
    alignItems: "center"
  },
  modalContent: {
    paddingTop: 30,
    height: "100%",
    width: "100%",
    backgroundColor: "white"
  },
  button: {
    marginTop: 15,
    backgroundColor: "#ac0101",
    height: 50,
    width: 130
  },
  buttonText: {
    textAlign: "center",
    lineHeight: 50,
    color: "white"
  },
  close: {
    padding: 10,
    position: "absolute",
    top: 0,
    right: 5
  }
});

export default Contact;
