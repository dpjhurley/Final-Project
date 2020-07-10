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
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                this.setState({
                    success: data.status
                })
            }
        })
    }

    componentDidUpdate() {
        this.state.success
    }

    render() { 
        return ( 
            <div className="account__register">

                <h2>Register account</h2>
                
                {this.state.success !== 'success' ? (
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
                ) : (
                    <div> Thankyou for registering </div>
                )}

            </div>
        );
    }
}
 
export default RegisterForm;



// import React, { useState, useEffect } from 'react';


// const RegisterForm = () => {
//     const [ name, setName ] = useState('');
//     const [ surname, setSurname ] = useState('');
//     const [ email, setEmail ] = useState('');
//     const [ date_of_birth, setDate_of_birth ] = useState('');
//     const [ gender, setGender ] = useState('');
//     const [ password, setPassword ] = useState('');
//     const [ password_confirmation, setPassword_confirmation ] = useState('');
//     const [ mailing_list, setMailing_list ] = useState(false);
//     const [ success, setSuccess ] = useState([]);
//     const [ error, setError ] = useState([]);

//     const handleNameChange = (event) => {
//         setName(event.target.value)
//     }

//     const handleSurnameChange = (event) => {
//         setSurname(event.target.value)
//     }

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value)
//     }

//     const handleDateChange = (event) => {
//         setDate_of_birth(event.target.value)
//     }
    
//     const handleGenderChange = (event) => {
//         setGender(event.target.value)
//     }
    
//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value)
//     }

//     const handleRePasswordChange = (event) => {
//         setPassword_confirmation(event.target.value)
//     }

//     const handleMailingListChange = (event) => {
//         setMailing_list(!mailing_list)
//     }
    
//     useEffect(() => {

//     }, [success])

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         sendingNewUser();
//     }

//     const sendingNewUser = async () => {
//         if (name) {
//             const resp = await fetch('/api/register', {
//                 method: 'POST',
//                 body: JSON.stringify(
//                     {
//                         'name': name,
//                         'surname': surname,
//                         'email': email,
//                         'date_of_birth': date_of_birth,
//                         'gender': gender,
//                         'password': password,
//                         'mailing_list': mailing_list
//                     }
//                 ),
//                 headers: {
//                     'Accept':       'application/json',
//                     'Content-Type': 'application/json',
//                 }           
//             })
//             const data = await resp.json()
//             if (data.status === 'success') {
//                 setSuccess(data.success)
//             }
//         }
//     }

//     return (  
//         <div className="account__register">

//             <h2>Register account</h2>
            
//             {success === 'success' ? (
//                 <div>Thankyou for registering</div>
//             ) : (
//                 <form action="" onSubmit={handleFormSubmit}>
                
//                     <div className="form-group">
//                         <label >First name</label><br />
//                         <input 
//                             className="form-control" 
//                             type="text" 
//                             name="name"
//                             onChange={handleNameChange} 
//                         />
//                     </div>
            
//                     <div className="form-group">
//                         <label >Surname</label><br />
//                         <input 
//                             className="form-control" 
//                             type="text" 
//                             name="surname"
//                             onChange={handleSurnameChange}
//                         />
//                     </div>
    
//                     <div className="form-group">
//                         <label >Date of birth</label><br />
//                         <input 
//                             className="form-control" 
//                             type="date" 
//                             name="date_of_birth"
//                             onChange={handleDateChange}
//                         />
//                     </div> 
    
//                     <div className="form-group">
//                         <label >Email</label><br />
//                         <input 
//                             className="form-control" 
//                             type="email" 
//                             name="email"
//                             onChange={handleEmailChange}
//                         />
//                     </div>
    
//                     <div className="form-group">
//                         <p>What Shoes are you interested in?</p>
//                         <label >Male</label>
//                         <input type="radio" name="gender" value="male" onClick={handleGenderChange} />
//                         <label >Female</label>
//                         <input type="radio" name="gender" value="female" onClick={handleGenderChange} />
//                     </div>
    
//                     <div className="form-group">
//                         <label >Password</label><br />
//                         <input 
//                             className="form-control" 
//                             type="password" 
//                             name="password"
//                             onChange={handlePasswordChange}
//                         />
//                     </div>
            
//                     <div className="form-group">
//                         <label >Confirm password</label><br />
//                         <input 
//                         className="form-control" 
//                         type="password" 
//                         name="password_confirmation"
//                         onChange={handleRePasswordChange}
//                         />
//                     </div> 
                    
//                     <div className="form-group">
//                         <input 
//                             type="checkbox"
//                             name="mailing_list" 
//                             onChange={handleMailingListChange}
//                         />
//                         <label >If you would like to receive regular emails featuring new styles, sale updates and great competitions, tick this box.</label>
//                     </div>
            
//                     <input type="submit" value="Register your account"/>
            
//                 </form>
//             )}
            

//         </div>
//     );
// }
 
// export default RegisterForm;