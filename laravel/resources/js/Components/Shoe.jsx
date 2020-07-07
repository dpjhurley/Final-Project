import React, { Component } from "react";

export default class Shoe extends Component {

  render() {
    const {image, price, title } = this.props
    console.log(this.props.image)
    return (
        <div className="shoe__container">
          <img className="shoe_image"  src={image} alt="Broken"/>
          <div className="shoe__title">{title}</div>
          <br />
          <div className="shoe__price">{price}</div>
        </div>
    );
  }
}
