import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../Image/logo.png";
import BlockHome from "./BlockHome";

function Nav() {
  return (
    <Router>
      <div className="Boxnav mobile">
        <strong className="logo">
          <Link to="/" className="">
            <img
              src="https://www.bank.rakuten.eu/assets/img/logo-europe.png"
              alt="Logo"
            />
          </Link>
        </strong>
        <div className="main-nav">
          <nav id="nav" className="nav" role="navigation">
            <ul className="nav-links hide-for-small">
              <li>
                <Link to="/" className="main-nav-links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/facto" className="main-nav-links">
                  Facto
                </Link>
              </li>
              <li>
                <Link to="/rsp" className="main-nav-links">
                  RSP
                </Link>
              </li>
              <li>
                <Link to="/doc" className="main-nav-links">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/about" className="main-nav-links">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="main-nav-links">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="navContain">
        <Route path="/facto" component={Facto} />
        <Route path="/rsp" component={Rsp} />
        <Route path="/doc" component={Doc} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Prela">
      <BlockHome />
    </div>
  );
}

function Facto() {
  return (
    <div className="Prela">
      <h2>Facto</h2>
    </div>
  );
}

function Rsp() {
  return (
    <div className="Prela">
      <h2>RSP</h2>
    </div>
  );
}

function Doc() {
  return (
    <div className="Prela">
      <h2>Doc</h2>
    </div>
  );
}

function About() {
  return (
    <div className="Prela">
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div className="Prela">
      <h2>Contact</h2>
    </div>
  );
}
export default Nav;
