import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";
import Header from "./Header.js";
import Loan from "./Loan.js";
import Exemple from "./Exemple.js";
import Nav from "./Nav.js";
import Scroll from "./Scroll.js";
import Java from "./Java.js";

class Search extends Component {
  state = {
    rts: "yeyr"
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Text>{this.state.rts}</Text>
          <Java rts={this.state.rts} />
        </View>
      </ScrollView>
    );
  }
}
/*<ScrollView>
<View>
  <Nav />
  <Scroll/>
</View>
</ScrollView>*/
export default Search;
