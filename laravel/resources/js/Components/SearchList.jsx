import React, { Component } from "react";
import Search from "./Search";

export default class SearchList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      brands: null,
      categories: null,
      loaded: false
    }
  }

  componentDidMount = () => {
    fetch("api/brands", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        this.setState({
            brands: data
        });
    });
    fetch("api/categories", {
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        this.setState({
            brands: data
        });
    });
    this.setState({
      loaded: true
    })
  };

  render() {
    return (
      <div className="sidebar">
        {this.state.loaded ? (
          <Search filterBy={this.state.brands}/>
        ) : (
          <div>loading</div>
        )}
        
      </div>
    );
  }
}
