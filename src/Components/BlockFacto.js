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

class facto extends Component {
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
                uri: "https://www.bank.rakuten.eu/assets/img/icon-deposits.jpg"
              }}
            />
          </View>
          <View>
            <Text style={styles.Title}>Factoring</Text>
          </View>
        </View>
        <View>
          <View style={styles.Columns}>
            <View style={styles.Textleft}>
              <Text>
                Rakuten Europe Bank is engaged in factoring transactions whereby
                a business partner sells to us the right to receive customer
                payments for certain invoices. These transactions do not affect
                the way customers have to pay their remaining balances.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Link}>
          {this._renderButton(
            "For further information on the use of your personal data, please click on this link",
            () => this.setState({ visibleModal: 1 })
          )}
        </View>
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

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
    height: "95%",
    width: "95%"
  },
  BlockImage: {
    height: "58px",
    width: "59px"
  },
  Title: {
    fontSize: 21,
    marginLeft: 15,
    marginTop: 5
  },
  Columns: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  Textleft: {
    width: "100%"
  },
  Link: {
    paddingTop: 15
  }
});

export default facto;
