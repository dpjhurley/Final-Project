import React, { Component } from 'react';
import payment from "./payment-methods.png";

export default class CopyrightFooter extends Component {
    render() {
        return (
            <div className="copyrightFooter">
                <div className="copyrightFooter__payment">
                    <img src={payment} ></img>
                </div>
                <div className="copyrightFooter__links">
                    <ul>
                        <li><a href="#">Sitemap</a></li>
                        <li><span className="spacer">|</span></li>
                        <li><a href="#"> Privacy</a></li>
                        <li><span className="spacer">|</span></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><span className="spacer">|</span></li>
                        <li><a href="#"><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2020 Global</a></li>
                        <li><span className="spacer">|</span></li>
                        <li><a href="#">A PrahaBootcamp company</a></li>
                        <li><span className="spacer">|</span></li>
                        <li><a href="#">All Rights reserved</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
