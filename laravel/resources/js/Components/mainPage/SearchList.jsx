import React, { Component, Fragment } from "react";
import Search from "./Search";

export default class SearchList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      brands: null,
      brandsLoaded: false,
      categories: null,
      categoriesLoaded: false,
      colors: null,
      colorsLoaded: false
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
            brands: data,
            brandsLoaded: true
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
        this.setState({
            categories: data,
            categoriesLoaded: true
        });
    });

    fetch("api/colors", {
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => {
        this.setState({
            colors: data,
            colorsLoaded: true
        });
    });




  };

  render() {
    return (
      <div className="sidebar">
        {this.state.categoriesLoaded && this.state.brandsLoaded ? (
          <Fragment>
          <Search search={this.state.brands}/>
          <Search search={this.state.categories}/>
          </Fragment>
          
          
        ) : (
          <div>loading</div>
        )}
        
      </div>
    );
  }
}