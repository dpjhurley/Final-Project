import React, { useState } from 'react';

const EmailSignUP = () => {
    const [ submitted, setSubmitted ] = useState(false);
    const [ email, setEmail ] = useState('');

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
            if (data.status === 'success') {
                setSubmitted(!submitted);
            }
        })

        fetch('./web/send-welcome-email', {
            method: 'POST',
            body: JSON.stringify({
                'email': email,
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    return (  
        <div className="footer__container__links ">
            <h2>Sign-up For the Latest News</h2>
            {submitted ? 
                <div className="emailSuccess">THANKS FOR SUBSCRIBING</div>
            :
                <>
                    <form method="Post" action="" onSubmit={handleFormSubmit}>
                        <label>Email
                            <input name="email" type="email" placeholder="Enter Your Email" onChange={handleEmailChange}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </>}
            <p>Please refer to our <a href="">privacy policy</a> to understand how we manage your personal data</p>
        </div>
    );
}
 
export default EmailSignUP;