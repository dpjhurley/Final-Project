import React, { Component } from 'react'
import Shoe from "./Shoe.jsx";


export default class ShoeList extends Component {


    render() {
        const {shoes} = this.props

        return (
            <div className="shoeSection">
              {/*   {
                shoes.map((shoe) => (
                    <Shoe key={shoe.id}                     
                        image={shoe.image_url}
                        price={shoe.price}
                        title={shoe.title}
                    />
                ))
                } */}
            </div>
        )
    }
}
