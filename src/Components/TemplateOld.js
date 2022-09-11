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
  TouchableOpacity,
  FlatList,
  ImageBackground
} from "react-native";
import { NativeRouter, Route, Link, Redirect } from "react-router-native";
import Modal from "modal-enhanced-react-native-web";
import TextRsp from "./TextRsp";
import { MediaQueryStyleSheet } from "react-native-responsive";

class rsp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
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
      <TextRsp />
      <View style={styles.close}>
        {this._renderButtonExit("X", () =>
          this.setState({ visibleModal: null })
        )}
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.banner}>
          <View style={styles.banOne}>
            <Text style={styles.banOneTextLeft}>
              Knocythj vdhjkr dum oriens diu perferret
            </Text>
            <Text style={styles.banOneTextRight}>
              vero inanes flatus dum oriens diu perferret
            </Text>
          </View>
          <View style={styles.banTwo}>
            <View style={styles.banTwoLeft}>
              <Text>
                *Haec dum oriens diu perferret, caeli reserato *Nunc vero inanes
                {"\n"}
                *flatus quorundam vile esse *Haec igitur prima lex amicitiae
                {"\n"}
                *sanciatur, ut ab *Quaestione igitur per multiplices dilatata
                {"\n"}
                *Accenderat super his incitatum propositum ad{"\n"}
              </Text>
              <View style={styles.btnStyle}>
                <Button title="Button" color="#FF3D00" />
              </View>
            </View>
            <View style={styles.banTwoRight}>
              <View style={styles.banTwoRightBlockT}>
                <Text>+33 06 60 60 06 </Text>
              </View>
              <View style={styles.banTwoRightBlock}>
                <View style={[styles.banTwoRightBlockTwo, styles.marg]}>
                  <Text>Luctuosam </Text>
                </View>
                <View style={styles.banTwoRightBlockTwo}>
                  <Text>Luctuosam </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.slide}>
          <ImageBackground
            source={"https://www.bank.rakuten.eu/assets/img/paralax.jpg"}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.slideText}>
              <Text style={styles.colorText}>
                Accenderat super his incitatum propositum ad
              </Text>
              <View style={styles.btnStyle}>
                <Button title="Button" color="#FF3D00" />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.multi} />
      </View>
    );
  }
}
const styles = MediaQueryStyleSheet.create({
  banner: {},
  banOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#bdbbbb",
    alignItems: "center",
    height: 75
  },
  banOneTextLeft: {},
  banOneTextRight: {},
  banTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  banTwoLeft: {},
  banTwoRight: {},
  btnStyle: {
    width: 100,
    marginLeft: "5%",
    marginTop: "5%"
  },
  banTwoRightBlockT: {
    height: 50,
    flexDirection: "row",
    padding: 10,
    marginBottom: 5,
    flexWrap: "wrap",
    backgroundColor: "#bdbbbb",
    alignItems: "center"
  },
  banTwoRightBlock: {
    height: 50,
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center"
  },
  banTwoRightBlockTwo: {
    height: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bdbbbb"
  },
  marg: {
    marginRight: 5
  },
  colorText: {
    color: "white",
    fontSize: 25
  },
  slide: {
    height: 250
  },
  slideText: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    paddingLeft: "10%",
    width: "50%"
  }
});

export default rsp;
