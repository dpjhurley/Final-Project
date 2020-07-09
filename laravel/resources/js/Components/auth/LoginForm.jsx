import React from 'react';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: [] //for making the erroes when status isnt success
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
            if (data.status === 'success') {
                this.props.onLoginSuccess(data.data.token)
            }
        })
    }

    render() { 
        return ( 
            <div className="account__login">
                <h2>Login</h2>
                <form action="" onSubmit={this.handleFormSubmit}>
    
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="email" 
                        onChange={this.handleEmailChange}
                    />
                    <br/>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password"
                        onChange={this.handlePasswordChange}
                    />
                    <br/>
                    <input type="submit" value="log in" />
                </form>
            </div>
         );
    }
}
 
export default LoginForm;