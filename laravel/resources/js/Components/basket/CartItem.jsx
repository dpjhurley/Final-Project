import React from 'react';

class CartItem extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="basket__item">
                <img className="basklet__image" src='../360e.jpg' alt=""/>
                <div className="basket__brand"></div>
                <div className="basket__name"></div>
                <div className="basket__price"></div>
                <div className="basket__quanity"></div>
                <div className="basket__size"></div>
                <div className="basket__delete">X</div>
            </div>
        );
    }
}
 
export default CartItem;