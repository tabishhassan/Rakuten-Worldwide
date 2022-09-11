import React, { Component } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

let scrollYPos = 0;
let scrollYPosbase = 300;

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get("window").height,
      screenWidth: Dimensions.get("window").width
    };
  }

  scrollToB = () => {
    scrollYPos = this.state.screenHeight * 1 + scrollYPosbase;
    this.scroller.scrollTo({ x: 0, y: scrollYPos });
  };
  scrollToC = () => {
    scrollYPos = this.state.screenHeight * 2 + scrollYPosbase;
    this.scroller.scrollTo({ x: 0, y: scrollYPos });
  };
  scrollToA = () => {
    this.scroller.scrollTo({ x: 0, y: scrollYPosbase });
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        ref={scroller => {
          this.scroller = scroller;
        }}
      >
      <TouchableOpacity onPress={this.scrollToA}>
         <View style={styles.scrollButton}>
            <Text style={styles.scrollButtonText}>Menu one</Text>
         </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.scrollToB}>
          <View style={styles.scrollButton}>
            <Text style={styles.scrollButtonText}>Menu Two</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.scrollToC}>
          <View style={styles.scrollButton}>
              <Text style={styles.scrollButtonText}>Menu Three</Text>
          </View>
          </TouchableOpacity>
        <View style={[styles.screen, styles.screenA]}>
          <Text style={styles.letter}>A</Text>
        </View>
        <View style={[styles.screen, styles.screenB]}>
          <Text style={styles.letter}>B</Text>
        </View>
        <View style={[styles.screen, styles.screenC]}>
          <Text style={styles.letter}>C</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  screen: {
    backgroundColor: "yellow",
    flexDirection: "column",
    height: Dimensions.get("window").height,
    justifyContent: "center"
  },
  screenA: {
    backgroundColor: "#F7CAC9"
  },
  screenB: {
    backgroundColor: "#92A8D1"
  },
  screenC: {
    backgroundColor: "#88B04B"
  },
  letter: {
    color: "#000",
    fontSize: 60,
    textAlign: "center"
  },
  scrollButton: {
    alignSelf: "center",
    backgroundColor: "white",
    height: 50,
    marginTop: 50,
    width: 150
  },
  scrollButtonText: {
    padding: 20,
    textAlign: "center"
  }
});
