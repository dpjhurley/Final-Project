import React from 'react';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';
import './accountArea.scss';
import RegisterRelay from './RegisterRelay.jsx';

class AccountArea extends React.Component {
    render() { 
        const { token, onLoginSuccess, logged_in, onFailedAuthentication, handleLogOut } = this.props;
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
                    <div>
                        Welcome back 

                        <button onClick={handleLogOut}>Log out</button>
                    </div>

                )}
                
            </>
        );
    }
}
 
export default AccountArea;