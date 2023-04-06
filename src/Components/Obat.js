import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Obat = (props) => {
    return (
        <Card style={{flexDirection: "row", border: "0.5px solid gray", padding: "5px 5px", marginBottom: "10px"}}>
            <Card.Img style={{width: "40px", margin: "auto", marginLeft: "5px"}} src={props.image} />
            <Card.Body>
                <Card.Title style={{fontSize: "15px"}}>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Obat;