import React from 'react';


export default class ThirdNav extends React.Component{

    render(){
        return(
            <div className="thirdNav">
            <div><h3> <a href="#">Our Purpose</a></h3></div>
            <div className="thirdNav__center"><h3><a href="#">Stores and Delivery</a></h3></div>
            <div><h3><a href="#">Easy 365 Day Returns</a></h3></div>
            </div>
        )
    }
}