import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Artikel = () => {
    return (
        <Navbar expand="lg" style={{marginBottom: "-15px"}}>
            <Container fluid>
                <Navbar.Brand href="#"><h4>Baca 100+ Artikel Baru</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Form className="d-flex">
                    <Button style={{color: "#e0004d", border: "none", backgroundColor: "white", fontWeight: "600", fontSize: "14px"}}>Lihat Semua</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Artikel;