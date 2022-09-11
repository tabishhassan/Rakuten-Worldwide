import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class img extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View style={styles.headerImage}>
          <Image
            style={styles.img}
            source={{
              uri: "https://www.bank.rakuten.eu/assets/img/paralax.jpg"
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: "100%"
  },
  headerImage: {}
});

export default img;
