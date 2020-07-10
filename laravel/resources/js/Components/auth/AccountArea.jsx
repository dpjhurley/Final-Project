import React from 'react';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';
import './accountArea.scss';

class AccountArea extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            logged_in: null,
            token: window.localStorage.getItem('_token'),
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

    render() { 
        return (
            <>
                {/* will need to change this to when true once this is all set up */}
                {!this.state.logged_in ? (
                    <div className="account">
                        <LoginForm 
                            logged_in={this.state.logged_in}
                            onLoginSuccess={this.onLoginSuccess}
                        />
                        <RegisterForm />
                    </div>
                ):(
                    <div>An account area maybe??</div>
                )}
                
            </>
        );
    }
}
 
export default AccountArea;