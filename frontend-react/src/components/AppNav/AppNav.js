import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Sections from '../../config/Sections.json';
import UserContext from '../../contexts/UserContext';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const AppNav = (props) => {

  const { handleLogout } = props
  const userContext = useContext(UserContext)

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/'>Finance Site</NavbarBrand>
        <Nav className='mr-auto'>
          {
            Sections.map((navItem, index) =>
              <NavItem key={index}> <NavLink key={index+ 1} tag={Link} to={`/${ navItem.value }`}> {navItem.label} </NavLink></NavItem>
            )
          }
          {
            userContext.user 
            ?
            <NavItem><NavLink onClick={handleLogout} tag={Link} to='/login'>Logout</NavLink></NavItem>
            :
            <>
              <NavItem><NavLink tag={Link} to='/login'>Login</NavLink></NavItem>
              <NavItem><NavLink tag={Link} to='/signup'>Sign Up</NavLink></NavItem>
            </>
          }
        </Nav>
      </Navbar>  
    </div>
  )
}

export default AppNav
