import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class doc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>Documentation</Text>
        <View style={styles.btnblock}>
          <View style={styles.btnlink}>
            <Text style={styles.textlink}>Pillar III Report 2017</Text>
          </View>
          <View style={styles.btnlink}>
            <Text style={styles.textlink}>Pillar III Report 2016</Text>
          </View>
        </View>
      </View>
    );
  }
}

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

export default doc;
