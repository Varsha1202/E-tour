import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Import User Icon
import LoginForm from './LoginForm';

function NavBarComponent() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    const handleOpenLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);

    const handleLogout = () => {
        localStorage.removeItem('email'); 
        setLoggedIn(false); 
        navigate('/'); 
    };

    useEffect(() => {
        
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);  
        }
    }, []);
    

    return (
        <>
            <Navbar
                expand="lg"
                data-bs-theme="dark"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 999,
                    height: '5rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    width: "100%",
                    padding: "0 2rem"
                }}
            >
                <Container>
                    <Navbar.Brand as={Link} to="/dashboard" className="fw-bold text-white">
                        <span style={{ color: "#3D8BFD" }}>TRAVEL</span>VISTA
                    </Navbar.Brand>

                    <Nav className="mx-auto d-flex gap-4">
                        <Nav.Link as={Link} to="/dashboard" className="text-white">Home</Nav.Link>
                        {/* <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/international">International</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/domestic">Domestic</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link as={Link} to="/popularPackage" className="text-white">Package</Nav.Link>
                        <Nav.Link as={Link} to="/Review" className="text-white">Reviews</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-white">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        
                    </Nav>

                    <Nav>
                        


                        <NavDropdown
                            title={<FaUserCircle size={30} color="white" />}
                            id="userDropdown"
                            align="end"
                            onClick={!loggedIn ? handleOpenLogin : null} // Open login modal if not logged in
                        >
                            {loggedIn ? (
                                <>
                                    <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                </>
                            ) : (
                                <NavDropdown.Item onClick={handleOpenLogin}>Login</NavDropdown.Item>
                            )}
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <LoginForm show={showLogin} handleClose={handleCloseLogin} setLoggedIn={setLoggedIn} />
        </>
    );
}

export default NavBarComponent;


















