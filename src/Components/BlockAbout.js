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
  FlatList
} from "react-native";
import { NativeRouter, Route, Link, Redirect } from "react-router-native";
import Modal from "modal-enhanced-react-native-web";
import TextRsp from "./TextRsp";
import { MediaQueryStyleSheet } from "react-native-responsive";

function Europe() {
  return (
    <View style={styles.tab}>
      <View style={styles.column}>
        <Text style={styles.colorRed}>Rakuten one</Text>
        <Text style={styles.text}>Online shopping in Germany</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.colorRed}>Rakuten one</Text>
        <Text style={styles.text}>Online shopping in Germany</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.colorRed}>Rakuten one</Text>
        <Text style={styles.text}>Online shopping in Germany</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.colorRed}>Rakuten one</Text>
        <Text style={styles.text}>Online shopping in Germany</Text>
      </View>
    </View>
  );
}

function Global() {
  return (
    <View style={styles.tab}>
      <View style={styles.column}>
        <Text style={styles.colorRed}>Rakuten two</Text>
        <Text style={styles.text}>Online shopping in Germany</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.colorRed}>Rakuten two</Text>
        <Text style={styles.text}>Online shopping in Germany</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.colorRed}>Rakuten two</Text>
        <Text style={styles.text}>Online shopping in Germany</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.colorRed}>Rakuten two</Text>
        <Text style={styles.text}>Online shopping in Germany</Text>
      </View>
    </View>
  );
}

class about extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <NativeRouter>
          <View style={styles.titleblock}>
            <Text style={styles.title}>About us</Text>
            <View style={styles.btnChange}>
              <Link to="/europe" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Europe</Text>
              </Link>
              <Link to="/global" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Global</Text>
              </Link>
            </View>
          </View>
          <Text>
            Launched in January 2016, Rakuten Europe continues the
            diversification of Rakuten in Europe and provides financial services
            to our members. Rakuten Europe Bank S.A. is a fully licensed credit
            institution established in Luxembourg and supervised by the
            Commission de Surveillance du Secteur Financier.
          </Text>
          <Route exact path="/" component={Europe} />
          <Route path="/europe" component={Europe} />
          <Route path="/global" component={Global} />
        </NativeRouter>
      </View>
    );
  }
}

const styles = MediaQueryStyleSheet.create({
  titleblock: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  column: {
    paddingTop: 45,
    height: 150,
    backgroundColor: "white",
    width: "45%",
    marginTop: 10,
    borderRadius: 10
  },
  colorRed: {
    color: "#bf0000",
    textAlign: "center"
  },
  text: {
    textAlign: "center"
  },
  title: {
    fontSize: 22,
    paddingBottom: 15
  },
  btnChange: {
    flexDirection: "row"
  },
  navItem: {
    paddingRight: 15
  }
});

export default about;
