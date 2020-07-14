import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';
import './accountArea.scss';
import RegisterRelay from './RegisterRelay.jsx';

class AccountArea extends React.Component {

    render() { 
        const { token, onLoginSuccess, onFailedAuthentication} = this.props;
       
        return (
            <>
                {/* will need to change this to when true once this is all set up */}
                {!token ? (
                    <div className="account">
                        <LoginForm 
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