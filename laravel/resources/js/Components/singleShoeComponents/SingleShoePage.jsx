import React from 'react';
import pic1 from "../continental_80_white_and_red_trainers_1-100x_-resize.jpg";
import pic2 from "../continental_80_white_and_red_trainers_2.jpg";
import pic3 from "../continental_80_white_and_red_trainers_3.jpg";
import pic4 from "../logo-360-640.png";
import pic5 from "../1900327270m7_zm.jpg";

export default class SingleShoePage extends React.Component{

    constructor(props){
        super(props);
        
    }   
    handleAddToBasket=(e)=>{
        e.preventDefault();
        if (window.confirm('Do you want to add this to your cart?')){
        fetch(`/api/cart/${1}/${this.props.shoe.id}/add`, {
            method: 'POST',
            body: JSON.stringify({
                'user_id': 1,
                'shoe_id': this.props.shoe.id
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })}
    }
    
    render() {
        const { shoe } = this.props;
        
        const financePrice = (shoe.price/3).toFixed(2);
        return (
            <div className="shoeDisplay">
                <h4>home {'>'} Women {">"} {shoe.brand.name} {shoe.title} </h4>
                <div className="shoeDisplay__actual">
                    <div className="shoeDisplay__actual__pic">
                        <div className="shoeDisplay__actual__pic-smallpic">
                           <a href="#"><img src={pic1} alt="pic"></img></a>
                           <a href="#"><img src={pic2} alt="pic"></img></a>
                           <a href="#"><img src={pic3} alt="pic"></img></a>
                           <a href="#"><img src={pic5} alt="pic"></img></a>
                           <a href="#"><img src={pic4} alt="pic"></img></a>
                        </div>
                        <div className="shoeDisplay__actual__pic-largepic">
                        <a href="#"><img src={`/images/${shoe.images[0].path}`} alt="pic"></img></a>
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
                            <select name="select-size" className="select-css">
                                <option value >Please select a size</option>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>Kids Sizes</option>
                            </select>
                            <a href="#">Size Guide</a>
                            </div>
                            <p><span className="bold-text">Finance</span>, pay <span className="bold-text">£{financePrice}</span> in <span className="bold-text">3 monthly instalments.</span> No interest or fees. <br/><a href="#">Learn More</a></p>
                            <button type="submit" className="add_to_basket_btn">ADD TO BASKET</button>
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
            </div>
        )
    }
}
