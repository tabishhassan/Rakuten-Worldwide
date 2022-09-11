import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput } from "react-native";

class doc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Name",
      mdp: "mot de passe"
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={mdp => this.setState({ mdp })}
          value={this.state.mdp}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default doc;
