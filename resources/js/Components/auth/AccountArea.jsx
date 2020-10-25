import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import RegisterRelay from './RegisterRelay.jsx';
import WelcomeArea from './WelcomeArea.jsx';
import Spinner from '../partials/Spinner/Spinner.jsx';

const AccountArea = ({ 
    token, 
    onLoginSuccess, 
    onFailedAuthentication
}) => {
    const [ user, setUser ] = useState(null);
    const [ message, setMessage ] = useState(null);
    const [ loggedOut, setLoggedOut ] = useState(true);

    useEffect(() => {
        fetchData();
    }, [loggedOut])

    const fetchData = async () => {
        const resp = await fetch('/api/user', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        })
        const results = await resp.json();
        if (results) {
            setUser(results.user)
            setMessage(results.message)
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem('_token')
        setLoggedOut(!loggedOut)
        window.location.reload(false);
    }

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
 
export default AccountArea;