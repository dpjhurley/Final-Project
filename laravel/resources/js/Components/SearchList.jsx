import React, { Component } from "react";
import Search from "./Search";

export default class SearchList extends Component {
  render() {
    return (
      <div className="sidebar">
        <Search />
        <Search />
        <Search />
        <Search />
      </div>
    );
  }
}
