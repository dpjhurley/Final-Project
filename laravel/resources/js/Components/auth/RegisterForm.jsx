import React from 'react';

class RegisterForm extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();

        fetch('Api')

    }

    render() { 
        const today = new Date();
        const minimumAge = today.getFullYear()-16+'-'+(today.getMonth()+1)+'-'+today.getDate();

        return ( 
            <form action="" onSubmit={this.handleFormSubmit}>
                
                <div className="form-group">
                    <label >Email</label><br />
                    <input className="form-control" type="email" name="email" />
                </div>

                <div className="form-group">
                    <p>What Shoes are you interested in?</p>
                    <label >Male</label>
                    <input type="radio" name="gender" value="male" />
                    <label >Female</label>
                    <input type="radio" name="gender" value="female" />
                </div>

                <div className="form-group">
                    <label >First name</label><br />
                    <input className="form-control" type="text" name="first_name" />
                </div>
        
                <div className="form-group">
                    <label >Surname</label><br />
                    <input className="form-control" type="text" name="surname"  />
                </div>

                <div className="form-group">
                    <label >Date of birth</label><br />
                    <input className="form-control" type="date" name="date_of_birth"
                            value={minimumAge} max={minimumAge}
                    />
                </div>   

                <div className="form-group">
                    <label >Password</label><br />
                    <input className="form-control" type="password" name="password" value="" />
                </div>
        
                <div className="form-group">
                    <label >Confirm password</label><br />
                    <input className="form-control" type="password" name="password_confirmation" value="" />
                </div> 
                
                <div className="form-group">
                    <input type="checkbox" name="mailing_list" id="" />
                    <label >If you would like to receive regular emails featuring new styles, sale updates and great competitions, tick this box.</label>
                </div>
        
                <input type="submit" value="Register your account"/>
        
            </form>
        );
    }
}
 
export default RegisterForm;
