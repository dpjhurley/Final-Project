import React from 'react';
import CartItem from './CartItem.jsx';
import './_basket.scss';
import pic1 from '../360e.jpg';

class Basket extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: []
        }
    }
    
    render() { 
        const { cart } = this.state;
        return (  
            <>
                <h2 className="basket__title">Basket</h2>

                <div className="basket_container">
                    {/* {cart.map((cartItem, i) => {
                        <CartItem 
                            key={i}
                            shoe={cartItem.shoe}
                        />
                    })} */}
                    <div className="cartitem">
                        <img className="cartitem__image" src={pic1} alt=""/>
                        <div className="cartitem__info">
                            <div className="brand">addidas</div>
                            <div className="name">shoes</div>
                            <div className="price">70</div>
                            <div className="quanity">Qty - (quantity)</div>
                            <div className="size">UK (size)</div>
                        </div>
                        <div className="cartitem__delete">X</div>
                    </div>
                </div>
                
            </>
        );
    }
}
 
export default Basket;