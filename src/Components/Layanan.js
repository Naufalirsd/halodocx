import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Layanan = (props) => {
    return (
        <Card className='p-0' style={{alignItems: "center", textAlign: "center", boxShadow: "none", borderRadius: "0px"}}>
            <Card.Img className='p-0 ' style={{width: "50px", borderRadius: "0px"}} src={props.image}/>
            <Card.Body className='p-0'>
                <Card.Title style={{fontSize: "13px", fontWeight: "400"}}>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Layanan;