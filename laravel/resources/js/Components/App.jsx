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
            loading: true
        };
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
    };
    handleBrandCheck = (e) => {
        if(this.state.filterByBrand.includes(e.target.value)){
            this.setState({
                filterByBrand: this.state.filterByBrand.filter((brand) => brand !== e.target.value)
            })
        }else{
            this.setState({
                filterByBrand: this.state.filterByBrand.concat(e.target.value)
            })
        }    
    }
    

    render() {
        const { data, loading } = this.state;
        return (
            <Router>
                <TopNav />
                <Navbar />
                {/* <AccountArea /> */}
                <HiddenMenu />
                <HiddenMenuSearch />
                <ThirdNav />
                            
                <Switch>
                    <Route path="/basket"  component={Basket}/>
                    {data ? (
                        data.map((shoe) => (
                            <Route key={shoe.id} path={`/shoe/${shoe.id}`}  render={() => <SingleShoePage shoe={shoe} />}/>
                        ))
                    ) : (
                        null
                    )}
                    <Route path="/account"  component={AccountArea}/>
                    <Route path="/cart" component={Basket} />
                    <Route path="/register-account"  component={RegisterForm}/>
                    <Route 
                        path="/" 
                        render={() => 
                            <MainDisplay 
                                data={data}
                                loading={loading}
                                handleBrandCheck={this.handleBrandCheck}
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
