import React from 'react';
import CartItem from './CartItem.jsx';
import './_basket.scss';
import BasketTotal from './BasketTotal.jsx';


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
        fetch(`api/cart/${1}`, {
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

    handleRemoveFromCart = (shoe) => {
        if (window.confirm('Are you sure you want to remove this from your cart?')) {            
            fetch(`api/cart/${shoe.user_id}/${shoe.shoe_id}/remove`, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
        } 
    }

    handleChangeOfQuantity = (shoe) => {
        fetch(`/api/cart/${shoe.user_id}/${shoe.shoe_id}/edit`, {
            method: 'POST',
            body: JSON.stringify({
                'newQuantity': this.state.newQuantity
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
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
        cart.forEach(i => {
            total += i.shoe.price * i.count
        });

        return (  
            <>
                <h2 className="basket__title">Basket</h2>
                {loaded ? (
                    <>
                        <div className="basket__container">
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
                        </div>
                        <BasketTotal total={total}/>
                    </>
                ) : (
                    <div>nothing to show</div>
                )}
                
            </>
        );
    }
}
 
export default Basket;