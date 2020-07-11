import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SingleShoePage from '../singleShoeComponents/SingleShoePage.jsx';

export default class Shoe extends Component {

  render() {
    const {image, price, title, id } = this.props
    return (
        <Link to={`/shoe/${id}`} >
          <div  className="shoe__container">
            <img className="shoe_image"  src={image} alt="Broken"/>
            <div className="shoe__title">{title}</div>
            <br />
            <div className="shoe__price">€{price}.00</div>
          </div>
        </Link>
    );
  }
}
