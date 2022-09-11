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
import Nav from "./Nav";
import Navweb from "./NavWeb";
import Footer from "./Footer";
import Contact from "./BlockContact";
import SimulatorLoan from "./SimulatorLoan";
import Form from "./ContactForm";
import Rsp from "./BlockRsp";
import Facto from "./BlockFacto";
import About from "./BlockAbout";
import Doc from "./BlockDoc";
import Img from "./BlockImage";
import Header from "./Header";
import Tt from "./ContactForm";
import Simu from "./Simu";
import strings from "./strings";
import { Provider } from "react-redux";
import Tpt from "./Template";
import Loan from "./Loan";
import Anim from "./Anim";
import { db } from "./Firebase";
import Conect from "./Connexion";
import Redu from "./testRedux.js";
import { connect } from "react-redux";

let docRef = db.collection("User");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      status: this.props.status,
      stat: this.props.status
    };
  }
  componentDidMount() {
    console.log("state " + this.state.stat);
    console.log("props " + this.props.status);
    docRef.doc("22").update({ name: "noi" });
    docRef
      .doc("22")
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });

    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 3000
    }).start();
  }

  /*componentWillReceiveProps() {
    console.log('log' + this.props.status)
    this.setState({status : this.props.status})
  }*/
  render() {
    let { fadeAnim } = this.state;
    if (this.props.status) {
      return (
        <ScrollView>
          <Redu />
          <Conect />
          <Navweb />
          <Loan />
          <Tpt />
          <Animated.View style={{ opacity: fadeAnim }}>
            <Nav />
            <Img />
            <View>
              <View>
                <Text style={styles.titleText}>Our product</Text>
              </View>
              <View style={[styles.block, styles.container]}>
                <Facto />
              </View>
              <View style={[styles.block, styles.container]}>
                <Simu />
              </View>
              <View style={[styles.block, styles.container]}>
                <Rsp />
              </View>
              <View style={styles.backgrey}>
                <View style={[styles.block, styles.container]}>
                  <Doc />
                </View>
                <View style={[styles.block, styles.container]}>
                  <About />
                </View>
              </View>
            </View>
            <Contact />
            <Footer />
          </Animated.View>
        </ScrollView>
      );
    } else {
      return (
        <View>
          <Redu />
        </View>
      );
    }
  }
}
/*<View style={styles.imgFix}>
<Header />
</View>*/
const mapStateToProps = state => {
  return {
    status: state.status
  };
};
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
export default connect(mapStateToProps)(App);
