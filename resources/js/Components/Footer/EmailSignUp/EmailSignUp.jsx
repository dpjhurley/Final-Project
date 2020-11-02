import React, { useState } from 'react';
import AlertEmail from './AlertEmail/AlertEmail.jsx';

const EmailSignUP = () => {
    const [ email, setEmail ] = useState('');
    const [ data, setData ] = useState(null);
    const [ alertVisible, setAlertVisible ] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        fetch('/api/emailSignUp', {
            method: 'POST',
            body: JSON.stringify({
                'email': email,
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                setData(data)
                if(data.status === 'error') {
                    setAlertVisible(!alertVisible)
                }
            }
        })

        // fetch('./web/send-welcome-email', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         'email': email,
        //     }),
        //     headers: {
        //         'Accept':       'application/json',
        //         'Content-Type': 'application/json',
        //     }
        // })
    }

    const handleEmailChange = (e) => setEmail(e.target.value)

    const handleAlert = () => setAlertVisible(!alertVisible);

    return (  
        <div className="footer__container__links ">
            <h2>Sign-up For the Latest News</h2>
            <form method="Post" action="" onSubmit={handleFormSubmit}>
                <label>Email
                    <input name="email" type="email" placeholder="Enter Your Email" onChange={handleEmailChange}/>
                </label>
                <input type="submit" value="Submit" />
                <AlertEmail 
                    visible={alertVisible}
                    onDismiss={handleAlert}
                >
                    {data ? data.message : ''}
                </AlertEmail>
            </form>
            <p>Please refer to our <a href="">privacy policy</a> to understand how we manage your personal data</p>
        </div>
    );
}
 
export default EmailSignUP;