import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import RegisterRelay from './RegisterRelay.jsx';
import WelcomeArea from './WelcomeArea.jsx';
import Spinner from '../partials/Spinner.jsx';

class AccountArea extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            message: null
        }
    }

    componentDidMount = () => {
        fetch('/api/user', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + this.props.token
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                user: data.user,
                message: data.message
            })
        });
    }

    componentDidUpdate = () => {
        this.props.token
    }

    render() {
        const { user, message } = this.state; 
        const { token, onLoginSuccess, onFailedAuthentication, handleLogout} = this.props;
        
        let username = '';
        if(user) {
            username = `${user.name} ${user.surname}`
        }

        console.log(user)

        return (
            <>
                {!token ? (
                    <div className="account">
                        <LoginForm 
                            onLoginSuccess={onLoginSuccess}
                            onFailedAuthentication={onFailedAuthentication}
                        />
                        
                        <RegisterRelay />
                    </div>
                ):(
                    (message === 'Success') ? (
                        <WelcomeArea 
                            username={username}
                            handleLogout={handleLogout}
                        />
                    ) : (
                        <Spinner/>
                    )                    
                )}
                
            </>
        );
    }
}
 
export default AccountArea;