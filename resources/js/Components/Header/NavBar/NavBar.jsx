import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu.jsx';

const NavBar = ({ 
    handleExtensionChange,
    handleOnClickHiddenSearch
}) => {
    return (
        <nav className="mainNav">
            <HamburgerMenu handleExtensionChange={handleExtensionChange} />
            <div className="mainNav__list ">
                <div className="mainNav__list__item">
                    <Link to="/women" onClick={() => handleExtensionChange('/women')} >Women's</Link>
                </div>
                <div className="mainNav__list__item">
                    <Link to="/men" onClick={() => handleExtensionChange('/men')} >Men's</Link>
                </div>
                <div className="mainNav__list__item">
                    <Link to="/kids" onClick={() => handleExtensionChange('/kids')} >Kids</Link>
                </div>             
            </div>

            <div className="mainNav__list" >
                <Link to="/" onClick={() => handleExtensionChange('/')} >
                    <h1><i className="fas fa-globe"></i> Global</h1>
                </Link>
            </div>

            <div className="mainNav__list">
                <div className="mainNav__list__item" >
                    <Link to="/account">Account</Link>
                </div>
                <div className="mainNav__list__icons">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"> </i>
                    </Link>
                </div>
                <div className="mainNav__list__icons search-icon" onClick={handleOnClickHiddenSearch} >
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;