import React from 'react';


export default class App extends React.Component {
    render() {
        return (
            <nav class="mainNav">
    
            <div class="mainNav__list ">
                <div class="mainNav__list__item">
                    <a href="#">Women's</a>
                    <div></div>
                </div>
                <div class="mainNav__list__item">
                    <a href="#">Men's</a>
                </div>
                <div class="mainNav__list__item">
                    <a href="#">Kids</a>
                </div>
            </div>
           <a href=""> <h1><i class="fas fa-globe"></i> Global</h1></a>
            <div class="mainNav__list">
                <div class="mainNav__list__item">
                    <a href="#">Accessories</a>
                </div>
                <div class="mainNav__list__item">
                    <a href="#">Brands</a>
                </div>
                <div class="mainNav__list__item">
                    <a href="#" style="color: red;">Sale</a>
                </div>
                <div class="mainNav__list__icons">
                   <a href="">
                           <i class="fas fa-shopping-cart"> </i>
                    </a>
                </div>
                 <div>
                  <a href="">
                          <i class="fas fa-search"></i>
                    </a>
                </div>
            </div>
        </nav>
        
 
        )
    }
}