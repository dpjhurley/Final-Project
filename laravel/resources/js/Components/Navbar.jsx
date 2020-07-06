import React from 'react';
import "./MainNav.scss"


export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="mainNav">
    
            <div className="mainNav__list ">
                <div className="mainNav__list__item">
                    <a href="#">Women's</a>
                    <div></div>
                </div>
                <div className="mainNav__list__item">
                    <a href="#">Men's</a>
                </div>
                <div className="mainNav__list__item">
                    <a href="#">Kids</a>
                </div>
            </div>
           <a href=""> <h1><i className="fas fa-globe"></i> Global</h1></a>
            <div className="mainNav__list">
                <div className="mainNav__list__item" >
                    <a href="#">Accessories</a>
                </div>
                <div className="mainNav__list__item">
                    <a href="#">Brands</a>
                </div>
                <div className="mainNav__list__item">
                    <a href="#" style={{color: "red"}}>Sale</a>
                </div>
                <div className="mainNav__list__icons">
                   <a href="">
                           <i className="fas fa-shopping-cart"> </i>
                    </a>
                </div>
                 <div>
                  <a href="">
                          <i className="fas fa-search"></i>
                    </a>
                </div>
            </div>
        </nav>
        
 
        )
    }
}