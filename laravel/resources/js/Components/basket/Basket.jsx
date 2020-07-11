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

    handleRemoveFromCart = (shoe) => {
        console.log('remove', shoe);

        // this.setState({
        //     loaded: false
        // })
        // fetch('api/cart/remove', {
        //     method: 'post',
        //     body: JSON.stringify(
        //         {
        //             'user_id': this.state.removeUserId,
        //             'shoe_id': this.state.removeShoeId,
        //         }
        //     ),
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     }
        // })
        // .then((resp) => resp.json())
        // .then((data) => {
        //     console.log(data)
        //     this.setState({
        //         // cart: data,
        //         loaded: !this.state.loaded
        //     })
        // })   
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