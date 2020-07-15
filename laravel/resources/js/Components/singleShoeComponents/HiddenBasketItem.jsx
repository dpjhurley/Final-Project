import React from 'react';

const HiddenBasketItem = ({ 
    item, 
    handleRemoveFromCart 
}) => {
    return (  
        <div className="hiddenBasketAddDisplayright__shoe__item">
            <img src={item.image_url} alt="shoe image"/>
            <div className="hiddenBasketAddDisplayright__shoe__item-describrion">
                <h5><strong>{item.brand}</strong></h5>
                <h5>{item.shoe.title}</h5>
                <h5>Size {item.size}</h5>
                <h5><strong>€</strong>{item.shoe.price}.00  Qty: {item.count}</h5>
            </div>
            <form onSubmit={handleRemoveFromCart}>
                <input className="hiddenBasketAddDisplayright__shoe__item-close" type="submit" value="X"/>
            </form>
        </div>
    );
}
 
export default HiddenBasketItem;
