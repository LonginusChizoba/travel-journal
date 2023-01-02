import React, { Component } from "react";
import "../style/nav.css";
class navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <img src={require("../image/world-png-world-icon.png")} alt="icon" className="nav-icon" />
        <p className="nav-text">My Traval Journal</p>
      </nav>
    );
  }
}

export default navbar;
