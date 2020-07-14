import React from 'react';
import pic1 from "../continental_80_white_and_red_trainers_1-100x_-resize.jpg";
import pic2 from "../continental_80_white_and_red_trainers_2.jpg";
import pic3 from "../continental_80_white_and_red_trainers_3.jpg";
import pic4 from "../logo-360-640.png";
import pic5 from "../1900327270m7_zm.jpg";
import Spinner from '../partials/Spinner';
import CartItem from '../basket/CartItem.jsx';

export default class SingleShoePage extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            shoe: {},
            loading: true,
            mainPic: 0,
            hiddenBasketShow: true
          
        }
    } 
    
    componentDidMount = () => {
        fetch(`/api/shoes/${this.props.shoe_id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                shoe: data,
                size: '',
                loading: false
            });
        });
    }
    
    handleOnClickAddToHiddenBasket = (event) => {
        this.setState({
            handleOnClickAddToHiddenBasket: !this.state.handleOnClickAddToHiddenBasket
        })
        const hiddenBasketField = document.querySelector('#hiddenBasketShow');
       
        if(this.state.hiddenBasketShow === true){
            hiddenBasketField.classList = ' hiddenBasketAddDisplay animate__animated animate__slideInRight'
        }else{
            hiddenBasketField.classList = 'hiddenBasketAddDisplay hiddenBasket'
        }
       
    }

    handleAddToBasket=(e)=>{
        e.preventDefault();
        
        if (window.confirm('Do you want to add this to your cart?')){
        fetch(`/api/cart/${1}/${this.state.shoe.id}/add`, {
            method: 'POST',
            body: JSON.stringify({
                'user_id': 1,
                'shoe_id': this.state.shoe.id,
                'size': this.state.size
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })}
    }

    handleSizeSelect = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    handleBigPicChange = (image)=>{
        this.setState({
            mainPic: image
        })
    }
    render() {
        const { shoe, loading } = this.state;
        console.log('the shoe id is', shoe.images)
        const financePrice = (shoe.price/3).toFixed(2);
        return (
            
            <div className="shoeDisplay">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <h4>home {'>'} Women {">"} {shoe.brand.name} {shoe.title} </h4>
                        <div className="shoeDisplay__actual">
                            <div className="shoeDisplay__actual__pic">
                                <div className="shoeDisplay__actual__pic-smallpic">
                               <a href="#"><img src={`/images/${shoe.images[0].path}`} alt="pic" onClick={() => this.handleBigPicChange(0)}></img></a>
                                    <a href="#"><img src={`/images/${shoe.images[1].path}`} alt="pic" onClick={() => this.handleBigPicChange(1)}></img></a>
                                    <a href="#"><img src={`/images/${shoe.images[2].path}`} alt="pic" onClick={() => this.handleBigPicChange(2)}></img></a>
                                    <a href="#"><img src={pic5} alt="pic"></img></a>
                                    <a href="#"><img src={pic4} alt="pic"></img></a>
                                </div>
                                <div className="shoeDisplay__actual__pic-largepic">
                                    <a href="#"><img src={`/images/${shoe.images[this.state.mainPic].path}`} alt="pic"></img></a>
                                </div>
                            </div>
                            <div className="shoeDisplay__actual__info">
                                <div className="shoeDisplay__actual__info-top">
                                    <h2>{shoe.brand.name}</h2>
                                    <p>{shoe.title}</p>
                                    <h3> <strong>£</strong>{shoe.price}.00</h3>
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
                                    <form className="shoeDisplay__actual__info-size-selection" onSubmit={this.handleAddToBasket}>
                                        <div className="shoeDisplay__actual__info-size-selection-select" >
                                            <select name="select-size" className="select-css" onChange={this.handleSizeSelect}>
                                                <option value >Please select a size</option>
                                                {shoe.stocks.map((s) => (
                                                    <option key={s.id}>{s.size}</option>
                                                ))}
                                            </select>
                                            <a href="#">Size Guide</a>
                                        </div>
                                        <p>
                                            <span className="bold-text">Finance</span>, pay <span className="bold-text">£{financePrice}</span> in <span className="bold-text">3 monthly instalments.</span> No interest or fees. <br/><a href="#">Learn More</a>
                                        </p>
                                        <button type="submit" className="add_to_basket_btn" onClick={this.handleOnClickAddToHiddenBasket}>ADD TO BASKET</button>
                                        <div className="hiddenBasketAddDisplay  hiddenBasket" id="hiddenBasketShow">
                                                 <div className="hiddenBasketAddDisplay__close"><span><i className="fas fa-times fa-2x"></i></span><h3>Your Basket</h3></div>

                                                  <div className="hiddenBasketAddDisplay__shoe">
                                                     <div className="hiddenBasketAddDisplay__shoe__item">
                                                        <img src={`/images/${shoe.images[0].path}`} alt="shoe image"/>
                                                        <div className="hiddenBasketAddDisplay__shoe__item-describrion">
                                                            <h5><strong>{shoe.brand.name}</strong></h5>
                                                            <h5>{shoe.title}</h5>
                                                            <h5>Size</h5>
                                                            <h5><strong>£</strong>{shoe.price}.00</h5>
                                                        </div>
                                                        <div className="hiddenBasketAddDisplay__shoe__item-close"> X </div>
                                                        </div>
                                                </div>

                                                <div className="hiddenBasketAddDisplay__buttons">
                                                    <div className="hiddenBasketAddDisplay__buttons-total buttons-item "><div>Subtotal:</div><div><strong>£</strong>{shoe.price}.00</div></div>
                                                    <div className="hiddenBasketAddDisplay__buttons-continue buttons-item">Continue Shopping</div>
                                                    <div className="hiddenBasketAddDisplay__buttons-basket buttons-item">Go To Basket</div>
                                                </div>

                                        </div>
                                       
                                    </form>
                                </div>
                                <div className="shoeDisplay__actual__info-collect">
                                    <h2>Click & Collect</h2>
                                    <p>Check, Reserve or Buy store stock</p>
                                    <div className="shoeDisplay__actual__info-collect-text">
                                        <button className="collect-btn">Click & Collect</button>
                                        <div><p><i className="fas fa-info-circle"></i> We have strict social distancing in place in our store. Please follow our safety measures when visiting our store.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div> 
        )
    }
}
