import {useState} from 'react';
import {APP_NAME} from '../config';
import Link from 'next/link';
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    const [isOpen,
        setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Link href="/"><a className="navbar-brand">{APP_NAME}</a></Link> 
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href="/signin"><a className="nav-link">Sign In</a></Link>
                        <Link href="/signup"><a className="nav-link">Sign Up</a></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;