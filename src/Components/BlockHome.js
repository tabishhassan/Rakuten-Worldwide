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
import { MediaQueryStyleSheet } from "react-native-responsive";

class rsp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "/doc",
      url2: "/facto"
    };
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

  _handlePress = () => {
    Linking.openURL(this.state.url);
    this.state.onPress && this.state.onPress();
  };

  _handlePress2 = () => {
    Linking.openURL(this.state.url2);
    this.state.onPress && this.state.onPress();
  };

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
        <View style={styles.slide}>
          <ImageBackground
            source={
              "https://media.gettyimages.com/illustrations/digitally-generated-image-of-torn-house-over-colored-background-illustration-id691037391?s=2048x2048"
            }
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.flex}>
              <View style={styles.slideText}>
                <Text style={styles.colorText}>
                  Turpes amici publicae si igitur eo minime casus ut aliquantum
                  igitur aliquantum rogemus causa Etenim.
                </Text>
              </View>
              <View style={styles.slideText}>
                <View style={styles.btnStyle}>
                  <Button
                    title="Button"
                    onPress={this._handlePress}
                    color="#ac0101"
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.slide}>
          <ImageBackground
            source={
              "https://images.pexels.com/photos/358488/pexels-photo-358488.jpeg?cs=srgb&dl=architecture-buildings-city-358488.jpg&fm=jpg"
            }
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.flex}>
              <View style={styles.slideTextRight}>
                <Text style={styles.colorTextRight}>
                  Turpes amici publicae si igitur eo minime casus ut aliquantum
                  igitur aliquantum rogemus causa Etenim.
                </Text>
              </View>
              <View style={styles.slideTextRight}>
                <View style={styles.btnStyle}>
                  <Button
                    title="Button"
                    onPress={this._handlePress2}
                    color="#ac0101"
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
const styles = MediaQueryStyleSheet.create(
  {
    btnStyle: {
      width: 100,
      marginLeft: "5%",
      marginTop: "5%"
    },
    marg: {
      marginRight: 5
    },
    colorText: {
      color: "black",
      fontSize: 25,
      width: "50%",
      backgroundColor: "#eaeaea63",
      padding: "2em"
    },
    colorTextRight: {
      backgroundColor: "#00000087",
      color: "white",
      fontSize: 25,
      width: "50%",
      textAlign: "right",
      padding: "2em"
    },
    slide: {
      height: 500
    },
    slideText: {
      display: "flex",
      flexDirection: "row",
      width: "95%",
      marginLeft: "5%",
      marginTop: "2em"
    },
    slideTextRight: {
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "row",
      width: "95%",
      marginTop: "2em",
      marginRight: "5%"
    },
    flex: {
      height: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  },
  {
    "@media (max-device-width: 720)": {
      colorText: {
        fontSize: 18,
        width: "100%"
      },
      colorTextRight: {
        fontSize: 18,
        width: "100%"
      },
      slideTextRight: {
        justifyContent: "center"
      },
      slideText: {
        justifyContent: "center"
      }
    }
  }
);

export default rsp;
