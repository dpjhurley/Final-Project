import React from 'react';
import CartItem from './CartItem.jsx';
import './_basket.scss';


class Basket extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [],
            loaded: false,
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

    componentDidUpdate = () => {
        this.state.loaded;
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
                                handleRemoveFromCart={(event)=>{
                                    event.preventDefault();

                                    this.handleRemoveFromCart(s);
                                }}
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