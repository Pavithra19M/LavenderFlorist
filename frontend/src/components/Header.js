import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import { LinkContainer }  from 'react-router-bootstrap';

const Header = () => {

  return (
    <Navbar expand='lg' className='navbar-color'>
        <Container>
            <LinkContainer to='/' >
              <Navbar.Brand>
                  <Image src='images/logo.jpg' className='logo-img' roundedCircle/>
                  <span className='text-style'>LavenderFlorist</span>
            </Navbar.Brand> 
            </LinkContainer>

           <Navbar.Toggle aria-controls='basic-navbar-nav'/>
           <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                   <LinkContainer to='/cart'>
                   <Nav.Link  className='text-style'>
                        <FaShoppingCart />Cart
                    </Nav.Link>
                   </LinkContainer>

                    <LinkContainer to='/login'>
                    <Nav.Link className='text-style'>
                        <FaUser />Login
                    </Nav.Link>
                    </LinkContainer>
                    
                </Nav>
           </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}

export default Header