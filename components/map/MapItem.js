import React from 'react'
// import { Row, Col, Form, Button } from 'react-bootstrap/'
// import PropTypes from 'prop-types'

const openNav = () => {
  document.getElementById('mySidenav').style.width = '20%'
}

const closeNav = () => {
  document.getElementById('mySidenav').style.width = '0'
}

const MapItem = () => {
  return (<div>
    <div className="container" onClick={() => openNav()}>
      <img className="image" src="https://i.scdn.co/image/ab67616d0000b2731e07e60dea6e2c877ea3b2b4"></img>
    </div>
    <div id="mySidenav" className="sidenav">
      <a className="closebtn" onClick={() => closeNav()}>&times;</a>
      <h1>Freaking out the neighbourhood</h1>
      <h2>Mac Demarco</h2>

    </div>
    <style jsx>{`
    .sidenav {
      // These two make it a sidebar, for some reason it renders but way off to the right of the screen. without them its essentially a tooltip
      // height: 100vh;
      // right:0;
      width: 0;
      position: fixed;
      z-index: 1;
      background-color: #111;
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;
    }
    
    .sidenav a, h1  {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
      transition: 0.3s;
    }
    .sidenav h2  {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 20px;
      color: #818181;
      display: block;
      transition: 0.3s;
    }
    
    .sidenav .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
    .container {
      position:relative;
      font: 15px Helvetica, Arial, sans-serif;
      background: gray;
      width 160px;
      height 120px;
      text-align: center;          
      border-radius: 50%;
    }
    .image {
        width: 100%;
        height: 100%;
        padding: 2%;        
        border-radius: 50%;
    }

  `}</style>
  </div >)
}

export default MapItem
