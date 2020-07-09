import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AccountArea from './auth/AccountArea.jsx'
import TopNav from './topComponents/Topnav';
import Navbar from './topComponents/Navbar';
import HiddenMenu from './topComponents/HiddenMenu.jsx';
import HiddenMenuSearch from './topComponents/HiddenMenuSearch.jsx';
import ThirdNav from './topComponents/ThirdNav.jsx';
import Footer from './bottomComponents/Footer.jsx'
import CopyrightFooter from './bottomComponents/CopyrightFooter.jsx';
import MainDisplay from './mainPage/MainDisplay.jsx';
import SingleShoePage from './singleShoeComponents/SingleShoePage.jsx';
import Basket from './basket/Basket.jsx';
import RegisterForm from './auth/RegisterForm.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    

    

    render() {
        return (
            <Fragment>
            <Router>
                    <TopNav />
                    <Navbar />
                    <HiddenMenu />
                    <HiddenMenuSearch />
                    <ThirdNav />
                    
                    <Switch>
                        <Route path="/basket"  component={Basket}/>
                        <Route path="/shoe"  component={SingleShoePage}/>
                        <Route path="/account"  component={AccountArea}/>
                        <Route path="/register-account"  component={RegisterForm}/>
                        <Route path="/"  component={MainDisplay}/>
                        
                    </Switch>
                <Footer />
                <CopyrightFooter />
             </Router>   
            </Fragment>
        )
    }
}
