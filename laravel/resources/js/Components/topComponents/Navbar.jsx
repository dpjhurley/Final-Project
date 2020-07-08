import React from 'react';
import { Link } from 'react-router-dom';
import HiddenMenu from './HiddenMenu.jsx';

export default class Navbar extends React.Component {


    render() {
        return (
            <nav className="mainNav">
    
            <div className="mainNav__list ">

                <div className="mainNav__list__item">
                    <Link to="/womens">Women's</Link>
                    <HiddenMenu />
                </div>

                <div className="mainNav__list__item">
                    <Link to="/mens">Men's</Link>
                    <HiddenMenu />
                </div>

                <div className="mainNav__list__item">
                    <Link to="/kids">Kids</Link>
                    <HiddenMenu />
                </div>

            </div>

            <div className="mainNav__list" >
                <Link to="/"> <h1><i className="fas fa-globe"></i> Global</h1></Link>
            </div>

            <div className="mainNav__list">

                <div className="mainNav__list__item" >
                    <Link to="/accessories">Accessories</Link>
                    <HiddenMenu />
                </div>

                <div className="mainNav__list__item">
                    <Link to="brands">Brands</Link>
                    <HiddenMenu />
                </div>

                <div className="mainNav__list__item">
                    <Link to="sales" style={{color: "red"}}>Sale</Link>
                    <HiddenMenu />
                </div>

                <div className="mainNav__list__icons">
                   <a href="">
                           <i className="fas fa-shopping-cart"> </i>
                    </a>
                </div>

                <div className="mainNav__list__icons" >
                    <a href="">
                        <i className="fas fa-search"></i>
                    </a>   
                </div>

            </div>
        </nav>
        
 
        )
    }
}