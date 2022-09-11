import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  WebBrowser
} from "react-native";

class Footer extends Component {
  state = {
    url: "https://global.rakuten.com/corp/",
    url2: "https://global.rakuten.com/corp/about/",
    url3: "https://global.rakuten.com/corp/about/history.html",
    url4: "https://www.bank.rakuten.eu/terms-conditions-cookie-policy"
  };
  _handlePress = () => {
    Linking.openURL(this.state.url);
    this.state.onPress && this.state.onPress();
  };
  _handlePress2 = () => {
    Linking.openURL(this.state.url2);
    this.state.onPress && this.state.onPress();
  };
  _handlePress3 = () => {
    Linking.openURL(this.state.url3);
    this.state.onPress && this.state.onPress();
  };
  _handlePress4 = () => {
    Linking.openURL(this.state.url4);
    this.state.onPress && this.state.onPress();
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.left}>
            <View style={styles.headerImage}>
              <Image
                style={styles.Image}
                source={{
                  uri: "https://www.bank.rakuten.eu/assets/img/logo.png"
                }}
              />
            </View>
          </View>
          <View style={styles.middle}>
            <Text
              title="Rakuten Worldwide"
              onPress={this._handlePress}
              style={styles.link}
            >
              Rakuten Worldwide
            </Text>
            <Text
              title="About Rakuten"
              onPress={this._handlePress2}
              style={styles.link}
            >
              About Rakuten
            </Text>
            <Text
              title="Our history"
              onPress={this._handlePress3}
              style={styles.link}
            >
              Our history
            </Text>
            <Text
              title="Legal informations"
              onPress={this._handlePress4}
              style={styles.link}
            >
              Legal informations
            </Text>
          </View>
          <View style={styles.rigth}>
            <Text
              title="Rakuten Worldwide"
              onPress={this._handlePress}
              style={styles.link}
            >
              Rakuten Worldwide
            </Text>
            <Text
              title="About Rakuten"
              onPress={this._handlePress2}
              style={styles.link}
            >
              About Rakuten
            </Text>
            <Text
              title="Our history"
              onPress={this._handlePress3}
              style={styles.link}
            >
              Our history
            </Text>
            <Text
              title="Legal informations"
              onPress={this._handlePress4}
              style={styles.link}
            >
              Legal informations
            </Text>
          </View>
        </View>
        <View style={styles.blockinfo}>
          <Text style={styles.info}>
            Copyright 2016 Rakuten Europe Bank S.A.,©All Rights Reserved.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginRight: "15%",
    marginLeft: "15%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  headerImage: {
    maxHeight: 140,
    width: "100%",
    overflow: "hidden"
  },
  Image: {
    height: 120,
    width: 324
  },
  blockinfo: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    backgroundColor: "#ac0101"
  },
  link: {
    paddingBottom: "1em"
  },
  info: {
    width: "100%",
    textAlign: "center",
    color: "white"
  },
  middle: {
    paddingBottom: "1em"
  },
  rigth: {
    paddingBottom: "1em"
  },
  left: {
    paddingBottom: "1em"
  }
});

export default Footer;
