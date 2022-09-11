import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerImage}>
          <Image
            style={styles.red}
            source={{ uri: "https://www.bank.rakuten.eu/assets/img/cover.jpg" }}
          />
        </View>
        <View style={styles.headerBlockText}>
          <Text style={styles.headertext}>The Merchant Empowering Bank</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 500
  },
  red: {
    color: "red",
    height: "100%",
    width: "100%"
  },
  header: {
    width: "50%"
  },
  headertext: {
    textAlign: "center",
    fontSize: 30
  },
  headerImage: {
    width: "50%"
  },
  headerText: {},
  headerBlockText: {
    top: "45%",
    width: "50%"
  }
});

export default Search;
