import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Layanan = (props) => {
    return (
        <Card style={{border: "none", alignItems: "center", textAlign: "center"}}>
            <Card.Img variant="top" style={{width: "50px"}} src={props.image}/>
            <Card.Body>
                <Card.Title style={{fontSize: "13px", fontWeight: "400"}}>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Layanan;