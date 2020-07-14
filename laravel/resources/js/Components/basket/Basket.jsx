import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem.jsx';
import './_basket.scss';
import BasketTotal from './BasketTotal.jsx';
import Spinner from '../partials/Spinner.jsx';


class Basket extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [],
            loaded: false,
            newQuantity: null
        }
    }

    componentDidMount = () => {
        fetch(`/api/cart`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + this.props.token
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

    handleRemoveFromCart = (shoe) => {
        if (window.confirm('Are you sure you want to remove this from your cart?')) {            
            fetch(`/api/cart/${shoe.shoe_id}/remove`, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + this.props.token
                }
            })
          
        }
        window.location.reload(false);

    }

    handleChangeOfQuantity = (shoe) => {
        fetch(`/api/cart/${shoe.shoe_id}/edit`, {
            method: 'POST',
            body: JSON.stringify({
                'newQuantity': this.state.newQuantity
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + this.props.token
            }
        }) 
        window.location.reload(false);
    }
    
    

    changeNewQuantity = (e) => {
        this.setState({
            newQuantity: e.target.value
        })
    }

    componentDidUpdate = () => {
        this.state.loaded;
    }
    
    render() { 
        const { cart, loaded } = this.state;

        let total = 0;
        if (cart.length > 0) {
            cart.forEach(i => {
                total += i.shoe.price * i.count
            });
        }

        return (  
            <>
                <h2 className="basket__title">Basket</h2>
                {loaded ? (
                    <>
                        <div className="basket__container">
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((s, i) => (
                                        <CartItem 
                                            key={i}
                                            shoe={s}
                                            handleRemoveFromCart={(e) => {
                                                e.preventDefault();
            
                                                this.handleRemoveFromCart(s);
                                            }}
                                            changeNewQuantity={this.changeNewQuantity}
                                            handleChangeOfQuantity={(e) => {
                                                e.preventDefault();
            
                                                this.handleChangeOfQuantity(s)
                                            }}
                                            changeQuantityBtn={this.changeQuantityBtn}
                                        />
                                        
                                    ))}
                                    <BasketTotal total={total}/>
                                </>
                            ) : (
                                <div>
                                    <h3>There is nothing in your basket </h3>
                                    <Link to="/main">
                                        <button className="basket__btn" >Check out our shoes</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <Spinner />
                )}
                
            </>
        );
    }
}
 
export default Basket;