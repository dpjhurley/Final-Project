import React, { Component } from 'react';
import Information from "./Information.jsx";
import Button from "../partials/Button.jsx";
import Sort from "../Sort.jsx";
import SearchList from "./SearchList";
import ShoeList from "./ShoeList";
import Spinner from "../partials/Spinner.jsx";
import Pagination from '../partials/Pagination.jsx';

export default class MainDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPage: 1,
            shoesPerPage: 9,
            filterByColor: [],
            filterByBrand: [],
            filterByCategory: []
        }
    }

    handleBrandCheck = (e) => {
        if(this.state.filterByBrand.includes(e.target.value)){
            this.setState({
                filterByBrand: this.state.filterByBrand.filter((brand) => brand !== e.target.value)
            })
        }else{
            this.setState({
                filterByBrand: this.state.filterByBrand.concat(e.target.value)
            })
        }    
    }

    handleCategoryCheck = (e) => {
        if(this.state.filterByCategory.includes(e.target.value)){
            this.setState({
                filterByCategory: this.state.filterByCategory.filter((category) => category !== e.target.value)
            })
        }else{
            this.setState({
                filterByCategory: this.state.filterByCategory.concat(e.target.value)
            })
        }
    }

    handleColorCheck = (e) => {
        if(this.state.filterByColor.includes(e.target.value)){
            this.setState({
                filterByColor: this.state.filterByColor.filter((color) => color !== e.target.value)
            })
        }else{
            this.setState({
                filterByColor: this.state.filterByColor.concat(e.target.value)
            })
        
        }
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    previousPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }
    
    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.data.length / this.state.shoesPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    }     

    render() {
        const { currentPage, shoesPerPage, filterByBrand, filterByCategory, filterByColor } = this.state;
        const { data, loading } = this.props;
        const indexOfLastShoe = currentPage * shoesPerPage;
        const indexOfFirstShoe = indexOfLastShoe - shoesPerPage;
        let filteredShoes = [];

        //this filters but maybe not in the way we want, could be made better (line 111 - 140)
        if (filterByBrand.length > 0) {
            data.forEach(shoe => {
                filterByBrand.forEach(brand => {
                    if (shoe.brand_id == brand) {
                        filteredShoes.push(shoe);
                    }
                })
            });
        } 

        if (filterByCategory.length > 0) {
            data.forEach(shoe => {
                filterByCategory.forEach(category => {
                    if (shoe.category_id == category) {
                        filteredShoes.push(shoe);
                    }
                })
            });
        } 

        if (filterByColor.length > 0) {
            data.forEach(shoe => {
                filterByColor.forEach(color => {
                    let regex = new RegExp (color, 'i')
                    if (shoe.color.match(regex) != null) {
                        filteredShoes.push(shoe);
                    }
                })
            });
        } 
        
        if (filterByBrand.length == 0 && filterByCategory.length == 0 && filterByColor.length == 0) {
            filteredShoes = this.props.data;
        }

        return (
            <div className="information">
            <Information />
            <div className="buttons">
                <Button />
                <div className="topright">
                    <Sort />
                </div>
            </div>
            <div className="shoes">
                <SearchList 
                handleBrandCheck={this.handleBrandCheck}
                handleCategoryCheck={this.handleCategoryCheck}
                handleColorCheck={this.handleColorCheck}
                isColorChecked={this.state.isColorChecked}

                />
                {(loading) ? (
                    <Spinner />
                ) : (
                    <div className="shoes__right">
                        {filteredShoes ? 
                            (<ShoeList shoes={filteredShoes.slice(indexOfFirstShoe, indexOfLastShoe)} />
                        ) : (
                            <div>No Shoes!</div>
                        )}
                        <Pagination
                            shoesPerPage={shoesPerPage}
                            totalShoes={filteredShoes.length}
                            paginate={this.paginate}
                            previousPage={this.previousPage}
                            nextPage={this.nextPage}
                        />
                    </div>
                )}
            </div>
        </div>
        )
    }
}
