import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Asuransi = (props) => {
    return (
        <Card style={{flexDirection: "row", border: "0.5px solid gray"}}>
            <Card.Img style={{width: "34px", margin: "auto", alignItems: "center"}} src={props.image} />
            <Card.Body>
            <Card.Title style={{fontSize: "15px"}}>{props.title}</Card.Title>
            <Card.Text style={{fontSize: "12px", color: "gray"}}>
                {props.text}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Asuransi;