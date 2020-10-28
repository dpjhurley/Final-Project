import React from "react";
import { Link } from 'react-router-dom';

const Shoe = ({image, price, title, id, brand_id }) => {
  return (
    <>
      <div  className="shoe__container">
        <div className="shoe__container__top">
        <Link to={`/shoe/${id}`} > <img className="shoe_image"  src={image} alt="Broken"/></Link> 
        <Link to={`/shoe/${id}`} > <div className="quickbuy"><i className="fas fa-shopping-bag"></i>  Quickbuy</div></Link> 
        </div>
          <div className="shoe__container__bottom">
            <h3 className="shoe__brand">{brand_id}</h3>
            
            <div className="shoe__title">{title}</div>
            <div className="shoe__price">€{price}.00</div>
                
          </div>
        </div>
      </>
    );
}

export default Shoe;