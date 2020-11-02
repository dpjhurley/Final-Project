import React from 'react';
import EmailSignUP from './EmailSignUp/EmailSignUp';
import CopyrightFooter from './CopyrightFooter/CopyrightFooter.jsx';


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
                    <EmailSignUP/>
                    <div className="footer__container__links">
                        <h2>Follow Us</h2>
                        <a href="https://www.facebook.com/schuhshoes/" target="blank"><i className="fab fa-facebook"></i> Facebook</a>
                        <a href="https://www.instagram.com/schuh/?hl=en" target="blank"><i className="fab fa-instagram"></i> Instagram</a>
                        <a href="https://twitter.com/schuh?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="blank"><i className="fab fa-twitter"></i> Twitter</a>
                    </div>
                </div>
                <CopyrightFooter />
            </footer>
        )
    }
}
