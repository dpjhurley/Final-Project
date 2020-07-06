import React, { Component } from "react";

export default class Shoe extends Component {
  render() {
    return (
        <div className="shoe__container">
          <div className="shoe__image">Image</div>
          <div className="shoe__title">Toms</div>
          <br />
          <div className="shoe__price">£29.99</div>
        </div>
    );
  }
}
