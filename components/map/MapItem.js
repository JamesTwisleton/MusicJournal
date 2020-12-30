import React from 'react'
// import { Row, Col, Form, Button } from 'react-bootstrap/'
// import PropTypes from 'prop-types'

// const Slider = () => {

// };
const MapItem = () => {
  return (<div className="container">
        <img className="image" src="https://i.scdn.co/image/ab67616d0000b2731e07e60dea6e2c877ea3b2b4"></img>
        <style jsx>{`
    .container {
        position:relative;
      font: 15px Helvetica, Arial, sans-serif;
      background: gray;
      width 160px;
      height 120px;
      text-align: center;          
      border-radius: 50%;
    }
    .container:hover {
      filter: brightness(1.5);
    }
    .image {
        width: 100%;
        height: 100%;
        padding: 2%;        
        border-radius: 50%;
    }
  `}</style>
    </div>)
}

export default MapItem
