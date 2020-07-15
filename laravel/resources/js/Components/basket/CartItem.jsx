import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import ChangeQuantity from './ChangeQuantity';

class CartItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
        }
    }

    changeQuantityBtn = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    render() { 
        const { shoe, handleRemoveFromCart, handleChangeOfQuantity, changeNewQuantity, changeQuantityBtn } = this.props;
        const { edit } = this.state;

        let quantityArray = [];
        if (shoe.stock.stock > 0) {
            quantityArray = [...Array(shoe.stock.stock + 1).keys()];
        }

        return (  
            <div className="cartitem">
                <div className="cartitem__info">
                    <Link to={`/shoe/${shoe.shoe_id}`}>
                        <img className="shoeimage" src={shoe.image_url} alt=""/>
                    </Link>
                    <div className="shoeinfo">
                        <div className="shoeinfo__brand">{shoe.brand}</div>
                        <div className="shoeinfo__name">{shoe.shoe.title}</div>
                        <div className="shoeinfo__price">€{shoe.shoe.price}</div>
                        <div className="shoeinfo__size">Size: {shoe.size}</div>
                        {edit ? (
                            <form action="" onSubmit={handleChangeOfQuantity}>
                                <ChangeQuantity
                                    quantityArray={quantityArray} 
                                    changeNewQuantity={changeNewQuantity} 
                                />
                                <input type="submit" value="Submit new amount"/>
                            </form>
                        ) : (
                            <div className="shoeinfo__count">Quantity: {shoe.count}
                                <button onClick={this.changeQuantityBtn}>Change Quantity?</button>
                            </div>
                        )}
                    </div>
                </div>
                <form className="cartitem__delete" onSubmit={handleRemoveFromCart}>
                    <input type="submit" value="X"/>
                   
                </form>
            </div>
        );
    }
}
 
export default CartItem;