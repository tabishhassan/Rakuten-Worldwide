// Components/Anim.js

import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Easing } from "react-native";

class Anim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: new Animated.Value(0),
      leftPosition: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.topPosition, {
        toValue: 250,
        tension: 8,
        friction: 3
      }),
      Animated.timing(this.state.leftPosition, {
        toValue: 100,
        duration: 5000,
        easing: Easing.elastic(2)
      })
    ]).start();
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Animated.View
          style={[
            styles.animation_view,
            { top: this.state.topPosition, left: this.state.leftPosition }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: "500px"
  },
  animation_view: {
    backgroundColor: "red",
    width: 100,
    height: 100
  }
});

export default Anim;
