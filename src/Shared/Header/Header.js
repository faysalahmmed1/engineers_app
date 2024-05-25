
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../src/Images/logo/Computer.png';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);
    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }
    return (
        <div className='header-container'>
            <Navbar collapseOnSelect expand="lg" className="bg-body-primary">
                <Container>
                    <a href="/">
                        <img className='header-logo' src={logo} alt="" />
                    </a>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='nav-container'>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/experts">Experts</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            {
                                user ?
                                    <button className='log-out-button' onClick={() => signOut()}>Log Out</button>
                                    :
                                    <Nav.Link href='/login'>Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;



