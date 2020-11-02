import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import HiddenBasketItem from './HiddenBasketItem';

const HiddenBasket = ({ 
    token,
    handleOnClickAddToHiddenBasket
 }) => {
    const [ cart, setCart ] = useState([]);
    const [ removed, setRemoved ] = useState(false);

    useEffect(() => {
        fetchCartData();
    }, [removed])

    const fetchCartData = async () => {
        const resp = await fetch(`/api/cart`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        })
        const results = await resp.json()
        if (results) {
            setCart(results);
            setRemoved(false)
        }
    }

    const handleRemoveFromCart = (shoe) => {
        if (window.confirm('Are you sure you want to remove this from your cart?')) {            
            fetch(`/api/cart/${shoe.shoe_id}/remove`, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token
                }
            })
            setRemoved(true);
        }
    }

    let total = 0;
    if (cart.length > 0) {
        cart.forEach(i => {
            total += (i.shoe.price * i.count);
        });
    }
    return (  
        <div className="hiddenBasketAddDisplay animate__animated animate__slideInRight" >  
            <div className="hiddenBasketOverlay" onClick={handleOnClickAddToHiddenBasket}></div>
            <div className="hiddenBasketAddDisplayright " id="hiddenBasketShow">
                <div className="hiddenBasketAddDisplayright__close" onClick={handleOnClickAddToHiddenBasket}><span><i className="fas fa-times fa-2x"></i></span><h3>Your Basket</h3></div>
                <div className="hiddenBasketAddDisplayright__shoe">
                    {cart.map((item, i) => (
                        <HiddenBasketItem 
                            key={i} 
                            item={item}
                            handleRemoveFromCart={(e) => {
                                e.preventDefault();

                                handleRemoveFromCart(item);
                            }}
                        />
                    ))}
                </div>
                <div className="hiddenBasketAddDisplayright__buttons">
                    <div className="hiddenBasketAddDisplayright__buttons-total buttons-item ">
                        <div>Subtotal:</div><div><strong>€</strong>{total}.00</div>
                    </div>
                    <div className="hiddenBasketAddDisplayright__buttons-continue buttons-item" >
                        <Link to="/" >Continue Shopping</Link>
                    </div>
                    <div className="hiddenBasketAddDisplayright__buttons-basket buttons-item">
                        <Link to="/cart" >Go To Basket</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HiddenBasket;