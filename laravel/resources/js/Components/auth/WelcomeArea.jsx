import React from 'react';
import { Link } from 'react-router-dom';

class WelcomeArea extends React.Component {

    render() { 
        const { username, handleLogout } = this.props;

        return (  
            <div className="userWelcomeBackScreen">
                <h2>Welcome back</h2>
                <div>
                    <p><span>{username}</span></p>
                    <button className="logout__btn" onClick={handleLogout}>Logout</button>
                </div>
                <Link to="/">
                    <i className="fas fa-globe "></i><br/> Global
                </Link>
                
            </div>
        );
    }
}
 
export default WelcomeArea;