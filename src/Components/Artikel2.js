import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Artikel2 = (props) => {
    return (
        <Card style={{width: '180%', border: "none", marginLeft: "-15px"}}>
            <Card.Body style={{width: "180%"}}>
                <Button variant='light' style={{paddingTop: "3px", paddingRight: "7px", paddingLeft: "7px" ,border: "1px solid #b3b3b3"}}>{props.title}</Button>
            </Card.Body>
        </Card>
    )
}

export default Artikel2;