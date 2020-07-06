import React from 'react';
 
export default class TopNav extends React.Component {
    render() {
        return (
            
  <div class="topNav">
    <ul class="topNav__help">
        <li>
            <a href="tel:555-1234-5678"><i class="fas fa-comment-alt"></i> Live Help</a>
        </li>
    </ul>
    <ul class="topNav__menu">
        <li class="firstTopnav">
            <a href="tel:555-1234-5678">555-1234-5678</a>
        </li>
        <li>
            <a href="#">Find store</a>
        </li>
        <li>
            <a href="#">Track order</a>
        </li>
        <li>
            <a href="#">My Account</a>
        </li>
        <li>
            <a href="#"> Email Sign up</a>
        </li>
    </ul>
  </div>
 
        )
    }
}