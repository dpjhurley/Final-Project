import React from 'react';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            surname: '',
            email: '',
            date_of_birth: '',
            gender: '',
            password: '',
            password_confirmation: '',
            mailing_list: '',
            error: []
        }
    }

    handlestateChange = (name, event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        fetch('/api/register', {
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
            // if (data.status === 'success') {
            //     this.props.onLoginSuccess(data.data.token)
            // }
        })
    }

    render() { 
        
        return ( 
            <div className="account__register">

                <h2>Register account</h2>
                
                <form action="" onSubmit={this.handleFormSubmit}>
                    
                    <div className="form-group">
                        <label >First name</label><br />
                        <input 
                            className="form-control" 
                            type="text" 
                            name="name"
                            onChange={() => this.handlestateChange('name', event)} 
                        />
                    </div>
            
                    <div className="form-group">
                        <label >Surname</label><br />
                        <input 
                            className="form-control" 
                            type="text" 
                            name="surname"
                            onChange={() => this.handlestateChange('surname', event)}
                        />
                    </div>
    
                    <div className="form-group">
                        <label >Date of birth</label><br />
                        <input 
                            className="form-control" 
                            type="date" 
                            name="date_of_birth"
                            onChange={() => this.handlestateChange('date_of_birth', event)}
                        />
                    </div> 
    
                    <div className="form-group">
                        <label >Email</label><br />
                        <input 
                            className="form-control" 
                            type="email" 
                            name="email"
                            onChange={() => this.handlestateChange('email', event)}
                        />
                    </div>
    
                    <div className="form-group">
                        <p>What Shoes are you interested in?</p>
                        <label >Male</label>
                        <input type="radio" name="gender" value="male" />
                        <label >Female</label>
                        <input type="radio" name="gender" value="female" />
                    </div>
    
                    <div className="form-group">
                        <label >Password</label><br />
                        <input 
                            className="form-control" 
                            type="password" 
                            name="password"
                            onChange={() => this.handlestateChange('password', event)}
                        />
                    </div>
            
                    <div className="form-group">
                        <label >Confirm password</label><br />
                        <input 
                        className="form-control" 
                        type="password" 
                        name="password_confirmation"
                        onChange={() => this.handlestateChange('password_confirmation', event)}
                        />
                    </div> 
                    
                    <div className="form-group">
                        <input 
                            type="checkbox"
                            name="mailing_list" 
                            onChange={() => this.handlestateChange('mailing_list', event)}
                        />
                        <label >If you would like to receive regular emails featuring new styles, sale updates and great competitions, tick this box.</label>
                    </div>
            
                    <input type="submit" value="Register your account"/>
            
                </form>

            </div>
        );
    }
}
 
export default RegisterForm;
