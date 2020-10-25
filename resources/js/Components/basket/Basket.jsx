import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem.jsx';
import BasketTotal from './BasketTotal.jsx';
import Spinner from '../partials/Spinner/Spinner.jsx';

const Basket = ({token}) => {
    const [ cart, setCart ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    const [ newQuantity, setNewQuantity ] = useState(null);
    const [ removed, setRemoved ] = useState(false);
    const [ edit, setEdit ] = useState(false);

    useEffect(() => {
        fetchData();
    }, [removed, edit])

    const fetchData = async () => {
        const resp = await fetch(`/api/cart`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        })
        const results = await resp.json()
        if (results) {
            setCart(results)
            setLoaded(true)
        }
    }

    const handleRemoveFromCart = async (s) => {
        if (window.confirm('Are you sure you want to remove this from your cart?')) {            
            const resp = await fetch(`/api/cart/${s.shoe_id}/remove`, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token
                }
            })
            setRemoved(!removed);
        }
    }

    const changeQuantityBtn = () => {
        setEdit(!edit)
    }

    const handleChangeOfQuantity = async (s) => {
        const resp = await fetch(`/api/cart/${s.shoe_id}/edit`, {
            method: 'POST',
            body: JSON.stringify({'newQuantity': newQuantity}),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        }) 
        setEdit(!edit);
    }
    
    const changeNewQuantity = (e) => {
        setNewQuantity(e.target.value)
    }

    let total = 0;
    if (cart.length > 0) {
        cart.forEach(i => {
            total += i.shoe.price * i.count
        });
    }


    return (  
        <>
            <Link className="topRoutes" to="/"><h4 className="topRoute__container" >HOME</h4></Link>
            <br />
            <h2 className="basket__title">Basket</h2>
            {loaded ? (
                <>
                    {token ? (
                        cart.length > 0 ? (
                            <>
                                <div className="basket__container">
                                    {cart.map((s, i) => (
                                        <CartItem 
                                            key={i}
                                            shoe={s}
                                            handleRemoveFromCart={(e) => {
                                                e.preventDefault();
            
                                                handleRemoveFromCart(s);
                                            }}
                                            edit={edit}
                                            changeQuantityBtn={changeQuantityBtn}
                                            changeNewQuantity={changeNewQuantity}
                                            handleChangeOfQuantity={(e) => {
                                                e.preventDefault();
            
                                                handleChangeOfQuantity(s)
                                            }}
                                        />
                                    ))}
                                </div>
                                <BasketTotal total={total}/> 
                            </>       
                        ) : (
                            <div className="basket__container--notloggedin">
                                <h3>Theres nothing in your basket!</h3>
                                <Link to="/main">
                                    <button className="basket__btn" >Check out our shoes</button>
                                </Link>
                            </div>
                        )
                    ) : (
                        <div className="basket__container--notloggedin">
                            <h3>Please login to use the basket</h3>
                            <Link to="/account">
                                <button className="basket__btn" >Login/register</button>
                            </Link>
                            <br/>
                            <Link to="/main">
                                <button className="basket__btn" >Check out our shoes</button>
                            </Link>
                        </div>
                    )}
                </>
            ) : (
                <Spinner />
            )}
            
        </>
    );
}
 
export default Basket;

// class Basket extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             cart: [],
//             loaded: false,
//             newQuantity: null
//         }
//     }

//     componentDidMount = () => {
//         fetch(`/api/cart`, {
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json",
//                 'Authorization': 'Bearer ' + this.props.token
//             }
//         })
//         .then((resp) => resp.json())
//         .then((data) => {
//             this.setState({
//                 cart: data,
//                 loaded: !this.state.loaded
//             })

//         })
//     }

//     handleRemoveFromCart = (shoe) => {
//         if (window.confirm('Are you sure you want to remove this from your cart?')) {            
//             fetch(`/api/cart/${shoe.shoe_id}/remove`, {
//                 method: 'POST',
//                 headers: {
//                     "Accept": "application/json",
//                     "Content-Type": "application/json",
//                     'Authorization': 'Bearer ' + this.props.token
//                 }
//             })
          
//         }
//         window.location.reload(false);

//     }

//     handleChangeOfQuantity = (shoe) => {
//         fetch(`/api/cart/${shoe.shoe_id}/edit`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 'newQuantity': this.state.newQuantity
//             }),
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json",
//                 'Authorization': 'Bearer ' + this.props.token
//             }
//         }) 
//         window.location.reload(false);
//     }
    
    

//     changeNewQuantity = (e) => {
//         this.setState({
//             newQuantity: e.target.value
//         })
//     }

//     componentDidUpdate = () => {
//         this.state.loaded;
//     }
    
//     render() { 
//         const { cart, loaded } = this.state;

        
//         return (  
            
//         );
//     }
// }
 
// export default Basket;