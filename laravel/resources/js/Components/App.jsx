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
                    {/* <AccountArea /> */}
                    <HiddenMenu />
                    <HiddenMenuSearch />
                    <ThirdNav />
                    <Basket />
                    {/* <Switch>
                        <Route path="/shoe"  component={SingleShoePage}/>
                        <Route path="/"  component={MainDisplay}/>
                        <SingleShoePage />
                    </Switch> */}
                <Footer />
                <CopyrightFooter />
             </Router>   
            </Fragment>
        )
    }
}
