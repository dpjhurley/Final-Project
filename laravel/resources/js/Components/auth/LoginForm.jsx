import React from 'react';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: [] ,//for making the erroes when status isnt success
            forgottenPassHidden: true

        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success' ) {
                this.props.onLoginSuccess(data.data.token)
                window.location.reload(false);
            } else {
                this.props.onFailedAuthentication();
            }
        })
    }

    handleOnClickHiddenPassword = (event) => {
        this.setState({
            forgottenPassHidden: !this.state.forgottenPassHidden
        })
        const hiddenPassField = document.querySelector('#forgotten-password-id');
        if(this.state.forgottenPassHidden === true){
            hiddenPassField.classList = 'forgotten-password '
        }else{
            hiddenPassField.classList = 'forgotten-password hidden'
        }
       
    }
    render() { 
        return ( 
            <div className="account__login">
                <h2>Existing Users</h2>
                <form className="account__login__form" action="" onSubmit={this.handleFormSubmit}>

                    <label>Email</label>
                    <input 

                        type="email" 
                        name="email" 
                        placeholder="Enter email address" 
                        onChange={this.handleEmailChange}
                    />
                    
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password"
                        onChange={this.handlePasswordChange}
                    />
                    <div className="account__login__form-remember">
                         <div>
                        <input className="checkbox-remember" type="checkbox" value="#"></input>
                        </div>
                         <div>
                         <p>Remember me</p>
                        </div>
                        <a href="#" onClick={this.handleOnClickHiddenPassword}>Forgotten password?</a>
                    </div>
                    <div className="forgotten-password hidden" id="forgotten-password-id">
                        <p>To reset your password please enter the email address you use to log into your schuh account below. We'll email you a link to securely reset your password.</p>
                        <div className="reset-pass-form">
                        <div >
                        <p>Email</p>
                         <input type="email" name="forgotten-password-email"></input>
                        </div>
                        <button className="repas" type="submit">Reset Password</button>
                        </div>
                    </div>
                    <input  className="btn-dark-login" type="submit" value="Log In" />
                </form>
            </div>
         );
    }
}
 
export default LoginForm;