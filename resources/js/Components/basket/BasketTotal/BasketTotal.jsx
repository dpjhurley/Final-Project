import React from 'react';

const BasketTotal = ({ total }) => {
    return (  
        <div className="basket__payment">
            <div className="totals">
                <div className="totals__sub">
                    <p>Subtotal:</p>
                    <p>€{total}</p>
                </div>
                <div className="totals__sub">
                    <p>delivery:</p>
                    <p>FREE</p>
                </div>
                <div className="totals__sub">
                    <p>Total:</p>
                    <p>€{total}</p>
                </div>
                <button className="totals__btn" >Proceed to payment</button>
            </div>
        </div>
    );
}
 
export default BasketTotal;




