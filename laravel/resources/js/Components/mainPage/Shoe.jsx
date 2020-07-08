import React, { Component } from "react";

export default class Shoe extends Component {

  render() {
    const {image, price, title, id } = this.props
    return (
        <div  className="shoe__container">
          <img className="shoe_image"  src={image} alt="Broken"/>
          <div className="shoe__title">{title}</div>
          <br />
          <div className="shoe__price">€{price}.00</div>
        </div>
    );
  }
}
