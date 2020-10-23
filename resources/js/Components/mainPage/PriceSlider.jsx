import React, { Component } from 'react'
import {SingleSlider} from 'react-slider-kit';

export default class SimpleExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
        <div className="priceSlider">
       <SingleSlider
              min={0}
             max={100}
             step={1}
             prefix={'£'}
             tooltip={'onClick'}
             handleOnChange={this.handleOnChange}
        /></div>
    )
  }
}