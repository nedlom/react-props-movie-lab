import React, { Component } from 'react';
import goldeneye from '../assets/poster-imgs/goldeneye.jpg'

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
