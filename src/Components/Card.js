import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Kartu = (props) => {
    return (
        <Card className='col-2 ' style={{ marginRight: "20px", border: "0.5px solid gray", borderRadius: "5px"}}>
            <Card.Img className='p-0 mt-3' style={{width: "90px", margin: "auto"}} src={props.image} />
            <Card.Body className='p-3'>
                <p style={{textAlign: "center", fontSize: "85%", borderRadius: "0px", margin: "0px"}}>
                    {props.title}
                </p>
            </Card.Body>
        </Card>
    )
}

export default Kartu;