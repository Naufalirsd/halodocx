import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Kartu = (props) => {
    return (
        <Card className='col-2 ' style={{width: "15%", marginRight: "20px", border: "0.5px solid gray"}}>
            <Card.Img style={{width: "80px", margin: "auto", paddingTop: "10px"}} src={props.image} />
            <Card.Body>
            <Card.Title style={{textAlign: "center", fontSize: "15px"}}>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Kartu;