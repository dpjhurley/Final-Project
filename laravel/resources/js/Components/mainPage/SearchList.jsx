import React, { Component, Fragment } from "react";
import Search from "./Search";
import SearchColor from "./SearchColor";
import Spinner from "../partials/Spinner";

export default class SearchList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      brands: null,
      brandsLoaded: false,
      categories: null,
      categoriesLoaded: false,
      colors: null,
      colorsLoaded: false,
      titleColor: "Color"
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
    const {handleBrandCheck, handleCategoryCheck, handleColorCheck} = this.props
    return (
      <div className="bodySidebar mainDisplaycontainer">
        {this.state.categoriesLoaded && this.state.brandsLoaded &&this.state.colorsLoaded ? (
          <Fragment>
            <SearchColor
              color={this.state.colors}
              handleColorCheck={handleColorCheck}
            />
            <Search 
              search={this.state.brands}
              handleCheck={handleBrandCheck}
              title="Brand"
            />
              <Search 
              search={this.state.categories}
              handleCheck={handleCategoryCheck}
              title="Category"
            />
            <div className="bodySidebarTitle mainDisplaycontainer">Price</div>
                <div className="bodySearch">
                    <form action="">
                                <div className="bodySearch__Item">
                                    <input type="range" min="0" max="100" step="1"  />
                                    <br/>
                                    <label>Price Between</label>
                                </div> 
                    </form>
                </div>
          </Fragment>
          
          
        ) : (
            <Spinner/>
        )}
        
      </div>
    );
  }
}