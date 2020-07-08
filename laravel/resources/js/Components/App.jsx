import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AccountArea from './auth/AccountArea.jsx'
import TopNav from './Topnav.jsx';
import Navbar from './Navbar.jsx';
import HiddenMenu from './HiddenMenu.jsx';
import HiddenMenuSearch from './HiddenMenuSearch.jsx';
import Information from "./Information.jsx";
import Button from "./Button.jsx";
import Sort from "./Sort.jsx";
import SearchList from "./SearchList";
import ShoeList from "./ShoeList";
import Spinner from "./Spinner.jsx";
import ThirdNav from './ThirdNav.jsx';
import Footer from './Footer.jsx'
import CopyrightFooter from './CopyrightFooter.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            logged_in: null,
            token: window.localStorage.getItem('_token'),
            loading: true
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
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    data: data,
                    loading: false
                });
                console.log(data)
            });
    };

    render() {
        return (
            <Fragment>
                    <TopNav />
                    <Navbar />
                    {/* <AccountArea 
                        logged_in={this.state.logged_in}
                        onLoginSuccess={this.onLoginSuccess}
                    /> */}
                    <HiddenMenu />
                    <HiddenMenuSearch />
                    <ThirdNav />

                <div className="information">
                    <Information />
                    <div className="buttons">
                        <Button />
                        <div className="topright">
                            <Sort />
                        </div>
                    </div>
                    <div className="shoes">
                        <SearchList />
                        {(this.state.loading) ? (
                            <Spinner />
                        ) : (
                            <ShoeList shoes={this.state.data} />
                        )}
                    </div>
                </div>
                <Footer />
                <CopyrightFooter />
            </Fragment>
        )
    }
}
