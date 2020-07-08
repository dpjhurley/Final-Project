import React from 'react';
import pic1 from "./continental_80_white_and_red_trainers_1-100x_-resize.jpg"
import pic2 from "./continental_80_white_and_red_trainers_2.jpg"
import pic3 from "./continental_80_white_and_red_trainers_3.jpg"
import pic4 from "./logo-360-640.png"
export default class SingleShoePage extends React.Component{
    render() {
        return (
            <div className="shoeDisplay">
                <h4>home > Women > converse black & white all start Trainers</h4>
                <div className="shoeDisplay__actual">
                    <div className="shoeDisplay__actual__pic">
                        <div className="shoeDisplay__actual__pic-smallpic">
                           <a href="#"><img src={pic1} alt="pic"></img></a>
                           <a href="#"><img src={pic2} alt="pic"></img></a>
                           <a href="#"><img src={pic3} alt="pic"></img></a>
                           <a href="#"><img src={pic4} alt="pic"></img></a>
                        </div>
                        <div className="shoeDisplay__actual__pic-largepic"></div>
                    </div>
                    <div className="shoeDisplay__actual__info">
                        <div className="shoeDisplay__actual__info-top"></div>
                        <div className="shoeDisplay__actual__info-size"></div>
                        <div className="shoeDisplay__actual__info-collect"></div>
                    </div>
                </div>
            </div>
        )
    }
}
