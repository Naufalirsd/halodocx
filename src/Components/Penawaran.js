import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Penawaran = (props) => {
    return (
        <Card style={{width: '100%'}}>
            <Card.Img src={props.image} />
        </Card>
    )
}

export default Penawaran;