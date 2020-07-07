import React, { Component } from 'react'
import Shoe from "./Shoe.jsx";


export default class ShoeList extends Component {


    render() {
        const {shoes} = this.props
        console.log(shoes)

        return (
            <div className="shoeSection">
                {
                shoes.map((shoe) => (
                    <Shoe                      
                        image={shoe.image_url}
                        price={shoe.price}
                        title={shoe.title}/>
                ))
                }
            </div>
        )
    }
}
