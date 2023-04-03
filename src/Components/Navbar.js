import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigation = (props) => {
    return (
        <Navbar bg="light" expand="lg" style={{borderBottom: "1px solid #b3b3b3"}}>
            <Container>
                <Navbar.Brand href="#"><img style={{width: "180px"}} src={props.image}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Beranda</Nav.Link>
                    <Nav.Link href="#action1">Artikel</Nav.Link>
                    <Nav.Link href="#action1">Aplikasi</Nav.Link>
                    <Nav.Link href="#action1">Riwayat</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Button variant="danger">Login</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;