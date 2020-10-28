import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AccountArea from './components/auth/AccountArea.jsx'; 
import Navbar from './components/topComponents/Navbar.jsx';
import SearchBar from './components/topComponents/SearchBar.jsx';
import Footer from './components/bottomComponents/Footer.jsx';
import CopyrightFooter from './components/bottomComponents/CopyrightFooter.jsx';
import MainDisplay from './components/mainPage/MainDisplay.jsx';
import SingleShoePage from './components/singleShoeComponents/SingleShoePage.jsx';
import Basket from './components/basket/Basket.jsx';
import RegisterForm from './components/auth/RegisterForm.jsx';
import Spinner from './components/partials/Spinner/Spinner.jsx';


const App = () => {
    const [ data, setData ] = useState([]);  
    const [ loading, setLoading ] = useState(true);
    const [ extension, setExtension ] = useState('')
    const [ logged_in, setLogged_in ] = useState(null);  
    const [ token, setToken ] = useState(window.localStorage.getItem('_token')); 
    const [ message, setMessage ] = useState([]); 
    const [ search, setSearch ] = useState('');
    const [ hiddenSearch, setHiddenSearch ] = useState(true);
    
    useEffect(() => {
        fetchData();
    }, [extension])

    const fetchData = async () => {
        const resp = await fetch(`/api/shoes${extension}`, {
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


    const handleExtensionChange = (e) => {
        setExtension(e)
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault();

        const resp = await fetch(`/api/search`, {
            method: 'POST',
            body: JSON.stringify({
                "search": search
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
        const results = await resp.json()
        if (results) {
            setData(results.data);
            // setLoading(true)
            // setExtension(results.extension)
        }
    }

    const handleSearchValueChange = (e) => {
        setSearch(e.target.value)
    }

    const handleOnClickHiddenSearch = (event) => {
        setHiddenSearch(!hiddenSearch)       
    }

    return ( 
        <Router>
            <Navbar 
                handleExtensionChange={handleExtensionChange}
                handleOnClickHiddenSearch={handleOnClickHiddenSearch}
            />
            <SearchBar 
                handleSearchSubmit={handleSearchSubmit}
                handleSearchValueChange={handleSearchValueChange}
                handleOnClickHiddenSearch={handleOnClickHiddenSearch}
                hidden={hiddenSearch}
            />
                        
            <Switch>
                <Route 
                    path={`/cart`}  
                    render={
                        () => <Basket 
                            token={token}
                        />
                    }
                />
                {loading ? (
                    <Spinner />
                ) : (
                    data.map((shoe) => (
                        <Route 
                            key={shoe.id} 
                            path={`/shoe/${shoe.id}`}  
                            render={
                                () => <SingleShoePage 
                                    shoe_id={shoe.id} 
                                    token={token}
                                    extension={extension}
                                    handleExtensionChange={handleExtensionChange}
                                />
                            }
                        />
                    ))
                )}
                <Route path="/account"  render={()=>
                    <AccountArea 
                        onLoginSuccess={onLoginSuccess} 
                        onFailedAuthentication={onFailedAuthentication}
                        logged_in={logged_in}
                        token={token}
                        message={message}
                    />
                }/>
                <Route path="/cart" component={Basket} />
                <Route path="/register-account"  component={RegisterForm}/>
                
                <Route 
                    path={extension} 
                    render={() => 
                        <MainDisplay 
                            data={data}
                            loading={loading}
                            extension={extension}
                            handleExtensionChange={handleExtensionChange}
                        >
                        </MainDisplay>
                    }
                />                
            </Switch>
            <Footer />
            <CopyrightFooter />
        </Router>   
        
    );
}
 
export default App;
