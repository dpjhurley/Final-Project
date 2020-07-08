import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className="button">Mens Trainer</button>
        <button className="button">Mens Boot</button>
        <button className="button">Smart Shoes</button>
        <button className="button">Nike</button>
        <button className="button">Vans</button>
        <button className="button">Adidas</button>
      </div>
    );
  }
}
