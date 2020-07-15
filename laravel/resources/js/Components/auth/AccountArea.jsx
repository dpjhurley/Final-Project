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
            user: null
        }
    }

    setUser = (d) => {
        this.setState({
            user: d
        })
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
            this.setUser(data)
        });
    }

    render() {
        const { user } = this.state; 
        const { token, onLoginSuccess, onFailedAuthentication, handleLogout, message} = this.props;
        
        let username = '';
        if(user) {
            username = `${user.name} ${user.surname}`
        }
        

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
                    user != null ? (
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