import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Artikel = () => {
    return (
        <Navbar expand="lg" style={{boxShadow: "none", marginLeft: "-34px"}}>
            <Container >
            <Navbar.Brand className='p-0' href="#"><h4>Baca 100+ Artikel Baru</h4></Navbar.Brand>
                <Form className="d-flex">
                    <Button style={{color: "#e0004d", boxShadow: "none", backgroundColor: "white", fontWeight: "600", fontSize: "14px"}}>Lihat Semua</Button>
                </Form>
            </Container>    
                
        </Navbar>
    )
}

export default Artikel;