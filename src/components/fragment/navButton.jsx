import React from 'react'
import Button from '../element/button'

const NavButton = (props) => {
  const {className} = props
  return (
    <ul className={className}>
        <li><Button>HOME</Button></li>
        <li><Button>ABOUT</Button></li>
        <li><Button>MENU</Button></li>
        <li><Button>PRODUCTS</Button></li>
        <li><Button>NEWS</Button></li>
        <li><Button>LOCATIONS</Button></li>
    </ul>
  )
}

export default NavButton