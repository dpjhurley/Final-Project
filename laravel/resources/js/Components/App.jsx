import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import AccountArea from './auth/AccountArea.jsx'
import TopNav from './Topnav.jsx';
import Navbar from './Navbar.jsx';
import HiddenMenu from './HiddenMenu.jsx';
import HiddenMenuSearch from './HiddenMenuSearch.jsx';
import ThirdNav from './ThirdNav.jsx';
import Footer from './Footer.jsx'
import CopyrightFooter from './CopyrightFooter.jsx';
import MainDisplay from './MainDisplay.jsx';
import SingleShoePage from './SingleShoePage.jsx';

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
                        <Route path="/main"  component={MainDisplay}/>
                        <Route path="/shoe"  component={SingleShoePage}/>
                        <SingleShoePage />
                    </Switch>
                <Footer />
                <CopyrightFooter />
             </Router>   
            </Fragment>
        )
    }
}
