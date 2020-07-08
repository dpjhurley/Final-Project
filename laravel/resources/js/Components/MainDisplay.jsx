import React, { Component } from 'react';
import Information from "./Information.jsx";
import Button from "./Button.jsx";
import Sort from "./Sort.jsx";
import SearchList from "./SearchList";
import ShoeList from "./ShoeList";
import Spinner from "./Spinner.jsx";

export default class MainDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            loading: true
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

    render() {
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
                {(this.state.loading) ? (
                    <Spinner />
                ) : (
                    <ShoeList shoes={this.state.data} />
                )}
            </div>
        </div>
        )
    }
}
