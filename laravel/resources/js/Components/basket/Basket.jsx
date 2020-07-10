import React from 'react';
import CartItem from './CartItem.jsx';
import './_basket.scss';


class Basket extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [],
            loaded: false,
            removeUserId: '',
            removeShoeId: ''
        }
    }

    handleRemoveFromCart = (event) => {
        event.preventDefault();


        this.setState({
            loaded: false
        })
        fetch('api/remove', {
            method: 'POST',
            body: JSON.stringify(
                {
                    'user_id': this.state.removeUserId,
                    'shoe_id': this.state.removeShoeId,
                }
            ),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                cart: data,
                loaded: !this.state.loaded
            })
        })   
    }

    handleRemoveUserId = (e) => {
        this.setState({
            removeUserId: e.target.value
        })
    }

    handleRemoveShoeId = (e) => {
        this.setState({
            removeShoeId: e.target.value
        })
    }

    fetchCartItems = () => {
        fetch(`api/cart/${18}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                cart: data,
                loaded: !this.state.loaded
            })

        })
    }

    componentDidMount = () => {
        this.fetchCartItems();
    } 

    componentDidUpdate = () => {
        this.state.cart;
    }
    
    render() { 
        const { cart, loaded } = this.state;
        return (  
            <>
                <h2 className="basket__title">Basket</h2>
                {loaded ? (
                    <div className="basket_container">
                        {cart.map((s, i) => (
                            <CartItem 
                                key={i}
                                shoe={s}
                                handleRemoveFromCart={this.handleRemoveFromCart}
                            />
                        ))}
                    </div>
                ) : (
                    <div>nothing to show</div>
                )}
                
            </>
        );
    }
}
 
export default Basket;