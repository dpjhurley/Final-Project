import React, { Fragment, useState, useEffect } from 'react';
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

const App = () => {
    const [ data, setData ] = useState([]);  
    const [ loading, setLoading ] = useState(true);  
    const [ logged_in, setLogged_in ] = useState(null);  
    const [ token, setToken ] = useState(window.localStorage.getItem('_token')); 
    const [ message, setMessage ] = useState([]); 
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const resp = await fetch("api/shoes", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const results = await resp.json()
        if (results) {
            setData(results);
            setLoading(false)
        }
    };

    const onLoginSuccess = (token) => {
        window.localStorage.setItem('_token', token)
        setLogged_in(true);
        setToken(token);
    }

    const onFailedAuthentication = () => {
        window.localStorage.removeItem('_token');
        setLogged_in(false);
        setToken(null);
    }

    const handleLogout = async () => {
        const resp = await fetch('/user/logout', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        })
        const results = await resp.json()
        if (results) {
            window.localStorage.removeItem('_token')
            setLogged_in(false)
            setToken(null)
            setMessage(results.message)
        }            
    }


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
                        onLoginSuccess={onLoginSuccess} 
                        onFailedAuthentication={onFailedAuthentication}
                        logged_in={logged_in}
                        token={token}
                        handleLogOut={() => handleLogOut}
                        message={message}
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
    );
}
 
export default App;
