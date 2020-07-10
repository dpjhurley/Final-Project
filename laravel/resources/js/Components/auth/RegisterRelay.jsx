import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class RegisterRelay extends Component {
    render() {
        return (
            <div className="acc-register-relay">
                <h2>Create Account</h2>
                <p>If you've never purchased from us before, creating an account makes shopping with us even easier.</p>
                <ul>
                    <li>Free Returns</li>
                    <li>Review Past Orders</li>
                    <li>A Glabal Shoes Wishlist</li>
                    <li>Saved e-receipts</li>
                </ul>
                <Link to="/register-account"> <button className="btn-dark-login">Join Global</button></Link>
               
            </div>
        )
    }
}
