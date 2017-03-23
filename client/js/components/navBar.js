import React from 'react'
import Quotes from './quotes';
import { Navbar } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar>
      <Quotes/>
      <a href="" className="navLink">Home</a>
  </Navbar>
  )
}

export default NavBar
