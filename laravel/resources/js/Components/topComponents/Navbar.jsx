import React from 'react';
import { Link } from 'react-router-dom';
import HiddenMenu from './HiddenMenu.jsx';
import HiddenMenuMen from './HiddenMenuMen.jsx';
import HiddenMenuSearch from './HiddenMenuSearch.jsx';
import HiddenMenuWomen from './hiddenMenuWomen.jsx';
import HiddenMenuKids from './hiddenMenuKids.jsx';
import HiddenMenuAccessories from './HiddenMenuAccessories.jsx';
import HiddenMenuBrands from './HiddenMenuBrands.jsx';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           
            hiddensearch: true,
          

        }
    }

 
    handleOnClickHiddenSearch = (event) => {
        this.setState({
            hiddensearch: !this.state.hiddensearch
        })
        const hiddenSearchField = document.querySelector('#hiddenSearch');
        console.log(hiddenSearchField.classList);
        if(this.state.hiddensearch === true){
             hiddenSearchField.classList = 'hiddenMenusearch'
        
        }else{
            hiddenSearchField.classList = 'hiddenMenusearch  hidden'
        }
       
    }

    render() {
        const { handleExtensionChange } = this.props;
        return (
            <nav className="mainNav">


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

    
                <div className="mainNav__list ">

                    <div className="mainNav__list__item">
                        <Link to="/women" onClick={() => handleExtensionChange('/women')} >Women's</Link>
                        <HiddenMenuWomen />
                    </div>

                    <div className="mainNav__list__item">
                        <Link to="/men" onClick={() => handleExtensionChange('/men')} >Men's</Link>
                        <HiddenMenuMen />
                    </div>

                    <div className="mainNav__list__item">
                        <Link to="/kids" onClick={() => handleExtensionChange('/kids')} >Kids</Link>
                        <HiddenMenuKids />
                    </div>
                                    
                </div>

                <div className="mainNav__list" >
                    <Link to="/" onClick={() => handleExtensionChange('/')} >
                        <h1><i className="fas fa-globe"></i> Global</h1>
                    </Link>
                </div>

                <div className="mainNav__list">

                    <div className="mainNav__list__item" >
                        <Link to="/accessories">Accessories</Link>
                        <HiddenMenuAccessories />
                    </div>

                    <div className="mainNav__list__item">
                        <Link to="brands">Brands</Link>
                        <HiddenMenuBrands />
                    </div>

                    {/* <div className="mainNav__list__item">
                        <Link to="sales" style={{color: "red"}}>Sale</Link>
                        <HiddenMenu />
                    </div> */}

                    <div className="mainNav__list__icons">
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"> </i>
                        </Link>
                    </div>

                    <div className="mainNav__list__icons search-icon" onClick={this.handleOnClickHiddenSearch} >
                        
                            <i className="fas fa-search"></i>
                    
                    </div>
                    <HiddenMenuSearch handleOnClickHiddenSearch={this.handleOnClickHiddenSearch} />
                </div>
            </nav>
        
 
        )
    }
}