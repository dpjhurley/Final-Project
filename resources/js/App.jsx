import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AccountArea from './components/auth/AccountArea.jsx'; 
import Footer from './components/Footer/Footer.jsx';
import MainDisplay from './components/MainDisplay/MainDisplay.jsx';
import SingleShoePage from './components/singleShoeComponents/SingleShoePage.jsx';
import Basket from './components/Basket/Basket.jsx';
import RegisterForm from './components/auth/RegisterForm.jsx';
import Spinner from './components/partials/Spinner/Spinner.jsx';
import Header from './components/Header/Header.jsx';


const App = () => {
    const [ data, setData ] = useState([]);  
    const [ loading, setLoading ] = useState(true);
    const [ extension, setExtension ] = useState('')
    const [ logged_in, setLogged_in ] = useState(null);  
    const [ token, setToken ] = useState(window.localStorage.getItem('_token'));
    const [ search, setSearch ] = useState('');
    const [ hiddenSearch, setHiddenSearch ] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [extension])

    const fetchData = async (e) => {
        if (extension === '/search' || extension === '/Search' ) {
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
            if (results.message === "No shoes found") {
                setData([])
                setLoading(false)
            } else {
                setData(results);
                setLoading(false)
                //need to get an error handfler for when nothing matches the search!!!!
                console.log(results)
            }
        } else {
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

    
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        extension === "/search" ? setExtension('/Search') : setExtension("/search");
        setLoading(true);
        setHiddenSearch(!hiddenSearch);
    }

    const handleExtensionChange = (e) => setExtension(e);

    const handleSearchValueChange = (e) => setSearch(e.target.value);

    const handleOnClickHiddenSearch = () => setHiddenSearch(!hiddenSearch);

    let colorList = [];
    let brandList = [];
    let categoryList = [];

    if (data.length > 0) {
        data.forEach(shoe => {
            !brandList.includes(shoe.brand.name) ? brandList.push(shoe.brand.name) : null;
            !categoryList.includes(shoe.category.name) ? categoryList.push(shoe.category.name) : null;
            if (shoe.color.includes(' ')) {
                let colorArr = shoe.color.split(' ');
                colorArr.forEach(element => {
                    if (element !== 'and' || '&') {
                        !colorList.includes(element.toLowerCase()) ? colorList.push(element.toLowerCase()) : null;
                    }
                });
            } else {
                !colorList.includes(shoe.color.toLowerCase()) ? colorList.push(shoe.color.toLowerCase()) : null;
            }
        });
    }

    return ( 
        <Router>
            <Header 
                handleExtensionChange={handleExtensionChange}
                handleOnClickHiddenSearch={handleOnClickHiddenSearch}
                handleSearchSubmit={handleSearchSubmit}
                handleSearchValueChange={handleSearchValueChange}
                hiddenSearch={hiddenSearch}
            />
                    
            <Switch>
                {loading ? (
                    <Spinner />
                ) : (
                    data.map((shoe) => (
                        <Route 
                            key={shoe.id} 
                            path={`/shoe/${shoe.id}`}  
                            render={() => 
                                <SingleShoePage 
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
                    />}
                />
                <Route 
                    path={`/cart`}  
                    render={
                        () => <Basket 
                            token={token}
                        />
                    }
                />
                <Route path="/register-account"  component={RegisterForm}/>

                <Route 
                    path={extension} 
                    render={() => 
                        <MainDisplay 
                            data={data}
                            loading={loading}
                            extension={extension}
                            search={search}
                            handleExtensionChange={handleExtensionChange}
                            colorList={colorList}
                            brandList={brandList}
                            categoryList={categoryList}
                        />
                    }
                />    
            </Switch>
            <Footer />
        </Router>   
    );
}
 
export default App;
