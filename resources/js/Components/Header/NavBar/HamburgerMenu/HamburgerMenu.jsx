import React from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({handleExtensionChange}) => {
    return (  
        <div className="menu-wrap">
            <input type="checkbox" className="toddler"/>
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li><Link to="/women" onClick={() => handleExtensionChange('/women')} >Women's</Link></li>
                            <li> <Link to="/men" onClick={() => handleExtensionChange('/men')} >Men's</Link></li>
                            <li><Link to="/kids" onClick={() => handleExtensionChange('/kids')} >Kids</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HamburgerMenu;