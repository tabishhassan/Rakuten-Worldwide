import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";

class doc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "ok",
      text: "email",
      mdp: "mdp"
    };
  }

  componentDidUpdate() {
    /*console.log("componentDidUpdate : ");
    console.log(this.props.profil);*/
  }

  _toggleRegister() {
    const action = {
      type: "connect",
      value: "Id is connected",
      email: this.state.text,
      mdp: this.state.mdp
    };
    this.props.dispatch(action);
  }

  _toggleUnRegister() {
    const action = { type: "disconnect", value: "Id is disconnected" };
    this.props.dispatch(action);
  }

  render() {
    console.log("redux mdp: " + this.props.mdp);
    console.log("redux email: " + this.props.email);
    return (
      <View>
        <Text style={styles.title}>Documentation</Text>
        <View style={styles.btnblock}>
          <View style={styles.btnlink}>
            <Text style={styles.textlink}>Connexion</Text>
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
            <Button title="Connexion" onPress={() => this._toggleRegister()} />
          </View>
          <View style={styles.btnlink}>
            <Text style={styles.textlink}>Disconnexion</Text>
            <Button
              title="Disconnexion"
              onPress={() => this._toggleUnRegister()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    profil: state.profil,
    email: state.email,
    mdp: state.mdp
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    paddingBottom: 15,
    textAlign: "center"
  },
  textlink: {
    color: "#bf0000",
    textAlign: "center"
  },
  btnlink: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5,
    width: 160
  },
  btnblock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "5%",
    marginRight: "5%"
  }
});

export default connect(mapStateToProps)(doc);
