import React from 'react';
import { Link } from 'react-router-dom';
import HiddenMenuSearch from './HiddenMenuSearch.jsx';


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
        if(this.state.hiddensearch === true){
             hiddenSearchField.classList = 'hiddenMenusearch'
        
        }else{
            hiddenSearchField.classList = 'hiddenMenusearch  hidden'
        }
       
    }

    render() {
        const { handleExtensionChange, handleSearchValueChange, handleSearchSubmit } = this.props;
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

                    <div className="mainNav__list__icons search-icon" onClick={this.handleOnClickHiddenSearch} >
                        
                            <i className="fas fa-search"></i>
                    
                    </div>
                    <HiddenMenuSearch 
                        handleOnClickHiddenSearch={this.handleOnClickHiddenSearch}
                        handleSearchSubmit={handleSearchSubmit}
                        handleSearchValueChange={handleSearchValueChange}
                    />
                </div>
            </nav>
        
 
        )
    }
}