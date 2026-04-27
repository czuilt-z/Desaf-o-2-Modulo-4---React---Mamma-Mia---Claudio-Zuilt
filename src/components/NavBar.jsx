import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// esto o saque de bootstrap, se pega los impor arriba y el html abajo



function NavBar() {

    const total = 25000;
    const token = true; // poner true para cambiar


    return (

        <>



            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">Mamma Mia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">


                        <Nav className="me-auto">
                            <Nav.Link href="#home">🍕 Home</Nav.Link>

                            {token ? (
                                <>
                                    <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                                    <Nav.Link href="#logout">🔓 Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link href="#login">🔐 Login</Nav.Link>
                                    <Nav.Link href="#register">🔐 Register</Nav.Link>
                                </>
                            )}

                            <Nav.Link href="#total">🛒 Total: ${total.toLocaleString('es-CL')}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}



export default NavBar
