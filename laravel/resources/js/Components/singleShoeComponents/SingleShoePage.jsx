import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pic4 from "../logo-360-640.png";
import pic5 from "../1900327270m7_zm.jpg";
import Spinner from '../partials/Spinner';
import QuantitySelector from './QuantitySelector.jsx';
import Alert from '../partials/Alert';
import HiddenBasket from './HiddenBasket';
import Image360 from './Image360.jsx';

const SingleShoePage = ({ 
    shoe_id,
    token
}) => {
    const [ shoe, setShoe ] = useState({});
    const [ size, setSize ] = useState(null);
    const [ quantity, setQuantity ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ mainPic, setMainPic ] = useState('/images/shoe.images[0].path');
    const [ hiddenBasketShow, setHiddenBasketShow ] = useState(true);
    const [ prompt, setprompt ] = useState(false);

    useEffect(() => {
        fetchData();
        
    }, [hiddenBasketShow])

    const fetchData = async () => {
        const resp = await fetch(`/api/shoes/${shoe_id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const results = await resp.json()
        if (results) {
            setShoe(results);
            setLoading(false);

        }
    }

    const handleOnClickAddToHiddenBasket = (event) => {
        setHiddenBasketShow(!hiddenBasketShow)
    }

    const handleAddToBasket = async (e) => {
        e.preventDefault();
        
        if (token){
            if (quantity > 0 && Number.isFinite(size)) {
                const resp = await fetch(`/api/cart/${shoe.id}/add`, {
                    method: 'POST',
                    body: JSON.stringify({
                        'shoe_id': shoe.id,
                        'size': size,
                        'quantity': quantity
                    }),
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + token

                    }
                })
                const results = resp.json();
                setHiddenBasketShow(!hiddenBasketShow)
            } 
        } else {
            setprompt(true)
        }
    }

    const handleSizeSelect = (e) => {
        setSize(e.target.value)
    }

    const handleBigPicChange = (image) => {
        setMainPic(image)
    }

    const handleQuantitySelect = (e) => {
        setQuantity(e.target.value)
    }

    const financePrice = (shoe.price/3).toFixed(2);

    let selectedQuantity = null;
    if (size) {
        shoe.stocks.forEach(s => {
            if (s.size == size) {
                selectedQuantity = s
            }
        });
    }  

    return (  
        <div className="shoeDisplay">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <h4><Link className="topRoutes" to="/">Home</Link> {'>'} {/*<Link className="topRoutes" to="/women">Women</Link> {">"}*/} {shoe.brand.name} {shoe.title} </h4>
                        <div className="shoeDisplay__actual">
                            <div className="shoeDisplay__actual__pic">
                                <div className="shoeDisplay__actual__pic-smallpic">
                                    <a href="#"><img src={`/images/${shoe.images[0].path}`} alt="pic" onClick={() => handleBigPicChange(0)}></img></a>
                                    <a href="#"><img src={`/images/${shoe.images[1].path}`} alt="pic" onClick={() => handleBigPicChange(1)}></img></a>
                                    <a href="#"><img src={`/images/${shoe.images[2].path}`} alt="pic" onClick={() => handleBigPicChange(2)}></img></a>
                                    <a href="#"><img src={pic5} alt="pic"></img></a>
                                    <a href="#"><img src={pic4} alt="pic"></img></a>
                                </div>
                                <div className="shoeDisplay__actual__pic-largepic">
                                    <a href="#"><img src={`/images/${shoe.images[mainPic].path}`} alt="pic"></img></a>
                                </div>
                            </div>
                            <div className="shoeDisplay__actual__info">
                                <div className="shoeDisplay__actual__info-top">
                                    <h2>{shoe.brand.name}</h2>
                                    <p>{shoe.title}</p>
                                    <h3> <strong>€</strong>{shoe.price}.00</h3>
                                    <a href="#">with free delivery</a>
                                    <div className="shoeDisplay__actual__info-top-star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <a href="#">(952)</a>
                                    </div>
                                    <a href="#" className="leavereview"><p>leave a review</p></a> 
                                </div>
                                <div className="shoeDisplay__actual__info-size">
                                    <form className="shoeDisplay__actual__info-size-selection" onSubmit={handleAddToBasket}>
                                        <div className="shoeDisplay__actual__info-size-selection-select" >
                                            <select name="select-size" className="select-css" onChange={handleSizeSelect}>
                                                <option disabled>Please select a size</option>
                                                {shoe.stocks.length > 0 ? (
                                                    shoe.stocks.map((s) => (
                                                        <option key={s.id}>{s.size}</option>
                                                    ))
                                                ) : (
                                                    <option value >Sorry - Out of stock</option>
                                                )}
                                            </select>
                                            <a href="#">Size Guide</a>
                                        </div>
                                        <QuantitySelector 
                                            selectedQuantity={selectedQuantity} 
                                            handleQuantitySelect={handleQuantitySelect}
                                        />
                                        <p>
                                            <span className="bold-text">Finance</span>, pay <span className="bold-text">£{financePrice}</span> in <span className="bold-text">3 monthly instalments.</span> No interest or fees. <br/><a href="#">Learn More</a>
                                        </p>
                                        <button type="submit" className="add_to_basket_btn">ADD TO BASKET</button>   
                                    </form>
                                    {hiddenBasketShow ? ( 
                                        null
                                    ) : (
                                        <HiddenBasket 
                                            token={token}
                                            handleOnClickAddToHiddenBasket={handleOnClickAddToHiddenBasket}
                                        />
                                    )}
                                    {!prompt ? null : <Alert message={`Please log in to add to your basket`}/> }
                                </div>


                                <div className="shoeDisplay__actual__info-collect">
                                    <h2>Click {`&`} Collect</h2>
                                    <p>Check, Reserve or Buy store stock</p>
                                    <div className="shoeDisplay__actual__info-collect-text">
                                        <button className="collect-btn">Click {`&`} Collect</button>
                                        <div><p><i className="fas fa-info-circle"></i> We have strict social distancing in place in our store. Please follow our safety measures when visiting our store.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div> 
    );
}
 
export default SingleShoePage;