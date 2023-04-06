import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Artikel3 = (props) => {
    return (
        <Card style={{ width: '102%', padding: "0px"}}>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title style={{fontSize: "16px"}}>{props.title}</Card.Title>
                <Card.Title style={{fontSize: "12px", color: "#135773", backgroundColor: "#e9f4f9", paddingTop: "5px", paddingBottom: "5px", width: "90px", textAlign: "center", borderRadius: "6px"}}>{props.title2}</Card.Title>
                <Card.Text style={{fontSize: "14px"}}>
                {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Artikel3;