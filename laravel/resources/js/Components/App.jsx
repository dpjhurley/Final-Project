import React, { Fragment } from 'react';
import TopNav from './Topnav.jsx'
import Navbar from './Navbar.jsx'
import RegisterForm from './auth/RegisterForm.jsx';
import LoginForm from './auth/LoginForm.jsx';
 
export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            logged_in: null,
            token: window.localStorage.getItem('_token')
        }
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
        fetch('api/shoes', {
            headers : { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // this.setState({
            //     data: data
            // })
        })
    }

    render() {
        return (
            <Fragment>
                    <TopNav />
                    <Navbar />
                    {/* this is to test */}
                    <RegisterForm />
                    <LoginForm 
                        onLoginSuccess={onLoginSuccess}
                    />
            </Fragment>
        )
    }
}