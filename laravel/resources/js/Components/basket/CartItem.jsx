import React from 'react';
import pic1 from '../360e.jpg';

class CartItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            quantity: 1
        }
    }
    
    handleQuantityChange = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }
    

    
    render() { 
        const { shoe, handleRemoveFromCart, handleRemoveShoeId, handleRemoveUserId } = this.props;
        const { quantity } = this.state;

        return (  
            <div className="cartitem">
                <div className="cartitem__info">
                    <img className="shoeimage" src={shoe.image_url} alt=""/>
                    <div className="shoeinfo">
                        <div className="shoeinfo__brand">{shoe.brand}</div>
                        <div className="shoeinfo__name">{shoe.shoe.title}</div>
                        <div className="shoeinfo__price">€{shoe.shoe.price}</div>
                        <select className="shoeinfo__quantity" value={quantity} onChange={this.handleQuantityChange}>
                            <option value="0">Qty - 0</option>
                            <option  value="1">Qty - 1</option>
                            <option value="2">Qty - 2</option>
                            <option  value="3">Qty - 3</option>
                        </select>
                    </div>
                </div>
                <form className="cartitem__delete" onSubmit={handleRemoveFromCart}>
                    <input type="hidden" name="user_id" value={shoe.user_id} onChange={handleRemoveShoeId} />
                    <input type="hidden" name="shoe_id" value={shoe.shoe_id} onChange={handleRemoveUserId} />
                    <input type="submit" value="X"/>
                </form>
            </div>
        );
    }
}
 
export default CartItem;