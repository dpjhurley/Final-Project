import React, { Component } from 'react'
import Shoe from "./Shoe.jsx";


export default class ShoeList extends Component {


    render() {
        const {shoes} = this.props
       
        return (
            <div className="shoeSection mainDisplaycontainer">
                {
                shoes.map((shoe) => (
                    <Shoe 
                        key={shoe.id} 
                        id={shoe.id}                    
                        image={shoe.image_url}
                        price={shoe.price}
                        title={shoe.title}
                        brand_id = {shoe.brand.name}
                    />
                ))
                }
            </div>
        )
    }
}
