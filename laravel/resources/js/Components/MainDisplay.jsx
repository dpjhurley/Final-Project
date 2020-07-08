import React, { Component } from 'react';
import Information from "./Information.jsx";
import Button from "./Button.jsx";
import Sort from "./Sort.jsx";
import SearchList from "./SearchList";
import ShoeList from "./ShoeList";
import Spinner from "./Spinner.jsx";

export default class MainDisplay extends Component {
    render() {
        console.log(this.props.data)
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
                {(this.props.loading) ? (
                    <Spinner />
                ) : (
                    <ShoeList shoes={this.props.data} />
                )}
            </div>
        </div>
        )
    }
}
