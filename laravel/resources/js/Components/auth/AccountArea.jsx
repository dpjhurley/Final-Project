import React from 'react';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';
import './accountArea.scss';

class AccountArea extends React.Component {

    render() { 
        return (
            <>
                {/* will need to change this to when true once this is all set up */}
                {!this.props.logged_in ? (
                    <div className="account">
                        <LoginForm />
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