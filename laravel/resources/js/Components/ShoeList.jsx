import React, { Component } from 'react'
import Shoe from "./Shoe.jsx";


export default class ShoeList extends Component {
    render() {
        return (
            <div className="shoeSection">
                <Shoe/>
                <Shoe/>
                <Shoe/>
                <Shoe/>
                <Shoe/>
                <Shoe/>
                <Shoe/>
                <Shoe/>
            </div>
        )
    }
}
