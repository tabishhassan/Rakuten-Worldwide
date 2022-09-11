import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loan from "./Loan.js";
import Footer from "./Footer.js";
import { NativeRouter, Route, Link } from "react-router-native";

function Home() {
  return <Text />;
}

function About() {
  return <Text style={styles.header}>About</Text>;
}

function Loans() {
  return (
    <Text style={styles.header}>
      <Loan />
    </Text>
  );
}

function Factoring() {
  return (
    <Text style={styles.header}>
      <Loan />
    </Text>
  );
}

function Rsp() {
  return <Text style={styles.header}>About</Text>;
}

function Docu() {
  return <Text style={styles.header}>About</Text>;
}

function Topic({ match }) {
  return <Text style={styles.topic}>{match.params.topicId}</Text>;
}

function Topics({ match }) {
  return (
    <View>
      <Text style={styles.header}>Topics</Text>
      <View>
        <Link
          to={`${match.url}/rendering`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Rendering with React</Text>
        </Link>
        <Link
          to={`${match.url}/components`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Components</Text>
        </Link>
        <Link
          to={`${match.url}/props-v-state`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Props v. State</Text>
        </Link>
      </View>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <Text style={styles.topic}>Please select a topic.</Text>}
      />
    </View>
  );
}

function Nav() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/loans" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Loans</Text>
          </Link>
          <Link to="/factoring" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Factoring</Text>
          </Link>
          <Link to="/rsp" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>RSP</Text>
          </Link>
          <Link to="/docu" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Documentation</Text>
          </Link>
          <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>About us</Text>
          </Link>
          <Link to="/contact" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Contact</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/loans" component={Loans} />
        <Route path="/factoring" component={Factoring} />
        <Route path="/rsp" component={Rsp} />
        <Route path="/docu" component={Docu} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  navItem: {
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default Nav;
