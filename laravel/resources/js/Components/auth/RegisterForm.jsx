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
            mailing_list: false,
            error: []
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleSurnameChange = (event) => {
        this.setState({
            surname: event.target.value,
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    handleDateChange = (event) => {
        this.setState({
            date_of_birth: event.target.value,
        })
    }
    
    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value,
        })
    }
    
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    handleRePasswordChange = (event) => {
        this.setState({
            password_confirmation: event.target.value,
        })
    }

    handleMailingListChange = (event) => {
        this.setState({
            mailing_list: !this.state.mailing_list
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
                // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
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
                            onChange={this.handleNameChange} 
                        />
                    </div>
            
                    <div className="form-group">
                        <label >Surname</label><br />
                        <input 
                            className="form-control" 
                            type="text" 
                            name="surname"
                            onChange={this.handleSurnameChange}
                        />
                    </div>
    
                    <div className="form-group">
                        <label >Date of birth</label><br />
                        <input 
                            className="form-control" 
                            type="date" 
                            name="date_of_birth"
                            onChange={this.handleDateChange}
                        />
                    </div> 
    
                    <div className="form-group">
                        <label >Email</label><br />
                        <input 
                            className="form-control" 
                            type="email" 
                            name="email"
                            onChange={this.handleEmailChange}
                        />
                    </div>
    
                    <div className="form-group">
                        <p>What Shoes are you interested in?</p>
                        <label >Male</label>
                        <input type="radio" name="gender" value="male" onClick={this.handleGenderChange} />
                        <label >Female</label>
                        <input type="radio" name="gender" value="female" onClick={this.handleGenderChange} />
                    </div>
    
                    <div className="form-group">
                        <label >Password</label><br />
                        <input 
                            className="form-control" 
                            type="password" 
                            name="password"
                            onChange={this.handlePasswordChange}
                        />
                    </div>
            
                    <div className="form-group">
                        <label >Confirm password</label><br />
                        <input 
                        className="form-control" 
                        type="password" 
                        name="password_confirmation"
                        onChange={this.handleRePasswordChange}
                        />
                    </div> 
                    
                    <div className="form-group">
                        <input 
                            type="checkbox"
                            name="mailing_list" 
                            onChange={this.handleMailingListChange}
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
