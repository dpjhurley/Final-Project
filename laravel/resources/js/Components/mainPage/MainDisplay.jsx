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
            data: null,
            loading: true,
            currentPage: 1,
            shoesPerPage: 9
        }
    }

    componentDidMount = () => {
        fetch("api/shoes", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    data: data,
                    loading: false
                });
            });
    };

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
        const { data, loading, shoesPerPage } = this.state;
        const indexOfLastShoe = this.state.currentPage * this.state.shoesPerPage;
        const indexOfFirstShoe = indexOfLastShoe - this.state.shoesPerPage;
        

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
                <SearchList />
                {(loading) ? (
                    <Spinner />
                ) : (
                    <div className="shoes__right">
                       {/*  <ShoeList /> //shoes={data.slice(indexOfFirstShoe, indexOfLastShoe)} /> */}
                        <Pagination
                            shoesPerPage={shoesPerPage}
                            totalShoes={data.length}
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
