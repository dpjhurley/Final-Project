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
            data: [],
            loading: true,
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

    componentDidMount = () => {
        fetch("api/shoes", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                data: data,
                loading: false
            });
        });
        fetch('/api/user', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    };
   
    render() {
        const { data, loading, logged_in, token } = this.state;
        return (
            <Router>
                <TopNav />
                <Navbar />
                <HiddenMenu />
                <HiddenMenuSearch />
                <ThirdNav />
                            
                <Switch>
                    <Route 
                        path={`/cart`}  
                        render={
                            () => <Basket 
                                token={token}
                            />
                        }
                    />
                    {data ? (
                        data.map((shoe) => (
                            <Route 
                                key={shoe.id} 
                                path={`/shoe/${shoe.id}`}  
                                render={
                                    () => <SingleShoePage 
                                        shoe_id={shoe.id} 
                                        token={token}
                                    />
                                }
                            />
                        ))
                    ) : (
                        null
                    )}
                    <Route path="/account"  render={ ()=>
                        <AccountArea 
                            onLoginSuccess={this.onLoginSuccess} 
                            onFailedAuthentication={this.onFailedAuthentication}
                            logged_in={logged_in}
                            token={token}
                            handleLogOut={this.handleLogOut}
                        />
                    }/>
                    <Route path="/cart" component={Basket} />
                    <Route path="/register-account"  component={RegisterForm}/>
                    <Route 
                        path="/" 
                        render={() => 
                            <MainDisplay 
                                data={data}
                                loading={loading}
                            />
                        }
                    />
                    
                    
                </Switch>
                <Footer />
                <CopyrightFooter />
             </Router>   
        )
    }
}
