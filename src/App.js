import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import records from "./content-data";

class App extends Component {
  state = {};
  render() {
    const content = records.map((record, index) => {
      return <Content key={index} item={record} />;
    });
    return (
      <div className="app-container">
        <Navbar />
        <div className="content-flex">{content}</div>
      </div>
    );
  }
}

export default App;
