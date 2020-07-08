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

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged_in: null,
            token: window.localStorage.getItem('_token'),
        };
    }

    onLoginSuccess = (token) => {
 
        window.localStorage.setItem('_token', token)
     
        this.setState({
            logged_in: true,
            token: token
        })
    }

    onFailedAuthentication = () => {

        window.localStorage.removeItem('_token');

        this.setState({
            logged_in: false,
            token: null
        })
    }

    

    render() {
        return (
            <Fragment>
            <Router>
                    <TopNav />
                    <Navbar />
                    {/* <AccountArea 
                        logged_in={this.state.logged_in}
                        onLoginSuccess={this.onLoginSuccess}
                    /> */}
                    <HiddenMenu />
                    <HiddenMenuSearch />
                    <ThirdNav />
                    <Switch>
                        <Route path="/shoe"  component={SingleShoePage}/>
                        <Route path="/"  component={MainDisplay}/>
                        <SingleShoePage />
                    </Switch>
                <Footer />
                <CopyrightFooter />
             </Router>   
            </Fragment>
        )
    }
}
