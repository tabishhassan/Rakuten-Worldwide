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
        <View style={styles.Blocktitle}>
          <View style={styles.BlockImage}>
            <Image
              style={styles.Image}
              source={{
                uri: "https://www.bank.rakuten.eu/assets/img/icon-rewards.jpg"
              }}
            />
          </View>
          <View>
            <Text style={styles.Title}>Rakuten Super Point (RSP)</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.TextIntro}>
              Rakuten Super Points are the virtual currency of our loyalty
              programme. You can earn Super Points by shopping at affiliate
              stores that are part of our programme.
            </Text>
          </View>
          <View style={styles.Columns}>
            <View style={styles.Textleft}>
              <Text>
                Once Rakuten Super Points are issued to your account, you can
                use them to watch series and films in Rakuten TV and to purchase
                Viber Out credit for your Viber app.
              </Text>
            </View>
            <View style={styles.TextRight}>
              <Text>
                Super Points have no cash value and may not be redeemed for
                cash.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Link}>
          {this._renderButton("> Terms & conditions", () =>
            this.setState({ visibleModal: 1 })
          )}
        </View>
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}
/*<View style={styles.container}>
<View style={styles.block}>
  <Text style={styles.text}>
    Would you like to know more about Rakuten Europe Bank ?
  </Text>
  {this._renderButton("Contact us", () =>
    this.setState({ visibleModal: 1 })
  )}
</View>
</View>
<Modal isVisible={this.state.visibleModal === 1}>
{this._renderModalContent()}
</Modal>*/
const styles = MediaQueryStyleSheet.create({
  Container: {
    width: "100%"
  },
  Blocktitle: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20
  },
  Image: {
    height: "100%",
    width: "100%"
  },
  BlockImage: {
    height: "42.19px",
    width: "48.22px"
  },
  Title: {
    fontSize: 21,
    marginLeft: 15,
    marginTop: 5
  },
  TextIntro: {
    color: "#ccc",
    width: "90%",
    paddingBottom: 20
  },
  Columns: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  Textleft: {
    width: "41%",
    marginRight: "8%"
  },
  TextRight: {
    width: "41%"
  },
  Link: {
    paddingTop: 15
  }
});

export default rsp;
