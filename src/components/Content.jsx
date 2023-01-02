import React, { Component } from "react";
import "../style/content.css";
class Content extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.item = this.props.item;
  }
  render() {
    return (
      <div className="content">
        <img src={require(`../image/${this.item.imageURL}`)} alt="rect" className="content-image" />
        <img src={require("../image/location-icon.png")} alt="icon" className="location-icon" />
        <span className="japan">
          ({this.item.location}) <a href={this.item.link}>{this.item.googleMap}</a>
        </span>

        <span className="mount-fuji">({this.item.title})</span>
        <span className="date">
          {this.item.startDate} - {this.item.endDate}
        </span>
        {/* <span className="date">({this.item.endDate})</span> */}
        <span className="fuji-text">
          ({this.item.description}) Mount Fuji is the tallest mountain in Japan, standing at 3,776 <br />
          meters (12,380 feet). Mount Fuji is the single most popular tourist <br />
          site in Japan, for both Japanese and foreign tourists.
        </span>
      </div>
    );
  }
}

export default Content;
