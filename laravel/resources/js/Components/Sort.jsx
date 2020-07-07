import React, { Component } from "react";

export default class Sort extends Component {
  render() {
    return (
      <div>
        <select>
          <option>Recommended</option>
          <option>Whats New</option>
          <option>Price high to low</option>
          <option>Price low to high</option>
        </select>
      </div>
    );
  }
}