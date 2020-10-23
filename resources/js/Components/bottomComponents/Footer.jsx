import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__container__links">
                        <h2>Need Help?</h2>
                        <a href="#">Customer Experience</a>
                        <a href="#">Track Order</a>
                        <a href="#">Delivery Info</a>
                        <a href="#">Return Policy</a>
                        <a href="#">Student Discount</a>
                    </div>
                    <div className="footer__container__links">
                        <h2>Usefull Links</h2>
                        <a href="#">Find Our Stores</a>
                        <a href="#">Jobs at Global</a>
                        <a href="#">Account Log in</a>
                        <a href="#">Gift cards</a>
                        <a href="#">Modern Slavery Statement</a>
                        <a href="#">Our Community Pillars</a>
                    </div>
                    <div className="footer__container__links ">
                    <h2>Global Shoes</h2>
                    <i className="fas fa-globe fa-8x"></i>
                    </div>
                    <div className="footer__container__links ">
                    <h2>Sign-up For the Latest News</h2>
                    <form method="Post" action="/">
                        <label>Email
                            <input name="email" type="email" placeholder="Enter Your Email" />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                    <p>Please refer to our <a href="">privacy policy</a> to understand how we manage your personal data</p>
                    </div>
                    <div className="footer__container__links">
                        <h2>Follow Us</h2>
                        <a href="#"><i className="fab fa-facebook"> Facebook</i></a>
                        <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
                        <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                    </div>
                </div>
            </footer>
        )
    }
}
