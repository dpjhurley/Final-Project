import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';
import './accountArea.scss';
import RegisterRelay from './RegisterRelay.jsx';

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
        const {setUser} = this.props;
       
        return (
            <>
                {/* will need to change this to when true once this is all set up */}
                {!token ? (
                    <div className="account">
                        <LoginForm 
                            logged_in={logged_in}
                            onLoginSuccess={onLoginSuccess}
                            onFailedAuthentication={onFailedAuthentication}
                        />
                        
                        <RegisterRelay />
                    </div>
                ):(
                    <div className="userWelcomeBackScreen"><h2>Welcome back</h2><span>Marian Nestorov</span><Link to="/"><i className="fas fa-globe "></i><br/> Global</Link></div>
                )}
                
            </>
        );
    }
}
 
export default AccountArea;