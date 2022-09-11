import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated
} from "react-native";
import Nav from "./Components/Nav";
import Navweb from "./Components/NavWeb";
import Footer from "./Components/Footer";
import Contact from "./Components/BlockContact";
import SimulatorLoan from "./Components/SimulatorLoan";
import Form from "./Components/ContactForm";
import Rsp from "./Components/BlockRsp";
import Facto from "./Components/BlockFacto";
import About from "./Components/BlockAbout";
import Doc from "./Components/BlockDoc";
import Img from "./Components/BlockImage";
import Header from "./Components/Header";
import Tt from "./Components/ContactForm";
import Simu from "./Components/Simu";
import strings from "./Components/strings";
import { Provider } from "react-redux";
import Store from "./Reducers/ConfigStore";
import Tpt from "./Components/Template";
import Loan from "./Components/Loan";
import Anim from "./Components/Anim";
import { db } from "./Components/Firebase";
import Conect from "./Components/Connexion";
import Redu from "./Components/testRedux";
import Apply from "./Components/AppHome";
import Route from "./Components/Route";
import NavMobile from "./Components/NavMobile";
let docRef = db.collection("User");

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={Store}>
        <ScrollView>
          <Route />
          <Footer />
        </ScrollView>
      </Provider>
    );
  }
}
/*<Apply />*/
/*<View style={styles.imgFix}>
<Header />
</View>*/

const styles = StyleSheet.create({
  imgFix: {},
  titleText: {
    fontSize: 36,
    fontFamily: "Gilroy-Thin",
    textAlign: "center"
  },
  container: {
    marginLeft: "15%",
    marginRight: "15%",
    width: "70%"
  },
  pad: {
    paddingTop: 30
  },
  block: {
    marginTop: 60
  },
  backgrey: {
    backgroundColor: "#e0e0e0"
  }
});
export default App;
