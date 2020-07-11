import React, { useState } from 'react';


 const RegisterForm = () => {
    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ date_of_birth, setDate_of_birth ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ password_confirmation, setPassword_confirmation ] = useState('');
    const [ mailing_list, setMailing_list ] = useState(false);
    const [ success, setSuccess ] = useState([]);
    const [ error, setError ] = useState([]);
    const [ terms, setTerms ] = useState(false);
    const [ checked, setChecked ] = useState(false);

    const handleTermsChange = (event)=>{
        setTerms(!terms);
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleSurnameChange = (event) => {
        setSurname(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleDateChange = (event) => {
        setDate_of_birth(event.target.value)
    }
    
    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleRePasswordChange = (event) => {
        setPassword_confirmation(event.target.value)
    }

    const handleMailingListChange = (event) => {
        setMailing_list(!mailing_list)
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();

        fetch('/api/register', {
            method: 'POST',
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
                    success: data.success
                })
            }
        })
    }

    return (  
        <div className="account__register">

            <h2>Register account</h2>
            
            {success === 'success' ? (
                <div>Thank you for registering</div>
            ) : (
                <div className="container">
    <form action="" onSubmit={handleFormSubmit} >
        <div className="row">
            <h4>Account</h4>
            <div className="input-group input-group-icon"><input type="text" placeholder="First Name" onChange={handleNameChange} />
                <div className="input-icon"><i className="fa fa-user"></i></div>
            </div>
            <div className="input-group input-group-icon"><input type="text" onChange={handleSurnameChange} placeholder="Last Name" />
                <div className="input-icon"><i className="fa fa-user"></i></div>
            </div>
            <div className="input-group input-group-icon"><input type="email" onChange={handleEmailChange} placeholder="Email Adress" />
                <div className="input-icon"><i className="fa fa-envelope"></i></div>
            </div>
            <div className="input-group input-group-icon"><input type="password" onChange={handlePasswordChange} placeholder="Password" />
                <div className="input-icon"><i className="fa fa-key"></i></div>
            </div>
            <div className="input-group input-group-icon"><input type="password" onChange={handleRePasswordChange} placeholder="Retype Password" />
                <div className="input-icon"><i className="fa fa-key"></i></div>
            </div>
        </div>
        <div className="row">
            <div className="col-half">
                <h4>Date of Birth</h4>
                <div className="input-group">
                    <div className="col-half"><input type="date" placeholder="Date of Birth" onChange={handleDateChange} name="date_of_birth" /></div>
                </div>
            </div>
            <div className="col-half">
                <h4>Gender</h4>
                <div className="input-group"><input type="radio" name="gender" value="male" onClick={handleGenderChange} id="gender-male" /><label htmlFor="gender-male" >Male</label><input type="radio" name="gender" onClick={handleGenderChange} value="female" id="gender-female" /><label htmlFor="gender-female">Female</label></div>
            </div>
        </div>
     {/*    <div className="row">
            <h4>Payment Details</h4>
            <div className="input-group"><input type="radio" name="payment-method" value="card" id="payment-method-card" checked /><label htmlFor="payment-method-card"><span><i className="fa fa-cc-visa"></i>Credit Card</span></label><input type="radio" name="payment-method" value="paypal"
                    id="payment-method-paypal" /><label htmlFor="payment-method-paypal"> <span><i className="fa fa-cc-paypal"></i>Paypal</span></label></div>
            <div className="input-group input-group-icon"><input type="text" placeholder="Card Number" />
                <div className="input-icon"><i className="fa fa-credit-card"></i></div>
            </div>
            <div className="col-half">
                <div className="input-group input-group-icon"><input type="text" placeholder="Card CVC" />
                    <div className="input-icon"><i className="fa fa-user"></i></div>
                </div>
            </div>
            <div className="col-half">
                <div className="input-group">
                <select>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                </select>
                <select>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                </select>
                </div>
            </div>
        </div> */}
        <div className="row">
            <h4>Terms and Conditions</h4>
            <div className="input-group"><input type="checkbox" id="terms" onChange={handleTermsChange} /><label htmlFor="terms" >I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label></div>
        </div>
        <div className="row">
            <h4>Join Our Mailing List</h4>
            <div className="input-group"><input type="checkbox" id="mailing" onChange={handleMailingListChange} /><label htmlFor="mailing">By Clicking on the checkbox you will be subscribed to our mailing list</label></div>
        </div>
        { terms ? <button className="register-submit">Register your account</button> : <div></div> }
    </form>
</div>)}
</div>)

     } 
     export default RegisterForm;
               