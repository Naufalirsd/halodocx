import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Asuransi = (props) => {
    return (
        <Card style={{display: "flex", flexDirection: "row"}}>
            <Card.Img style={{width: "32px", margin: "auto", paddingTop: "10px", alignItems: "center"}} src={props.image} />
            <Card.Body>
            <Card.Title style={{fontSize: "15px"}}>{props.title}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
            </Card.Body>
      </Card>
    )
}

export default Asuransi;