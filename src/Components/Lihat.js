import Card from 'react-bootstrap/Card';


const Lihat = (props) => {
    return (
        <Card style={{padding: "5px 5px", marginBottom: "10px", border: "1px solid gray"}}>
            <Card.Body style={{fontWeight: "700", fontSize: "16px"}}>{props.text}</Card.Body>
        </Card>
    )
}

export default Lihat;