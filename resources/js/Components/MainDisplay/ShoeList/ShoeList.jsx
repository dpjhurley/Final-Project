import React from 'react'
import ShoeCard from "./ShoeCard/ShoeCard.jsx";


const ShoeList = ({ shoes }) => {
    return (
        <div className="shoeSection mainDisplaycontainer">
            {
            shoes.map((shoe) => (
                <ShoeCard 
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

export default ShoeList;