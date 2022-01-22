import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = (props) => {


    return (
        <div className="container">
        <Card className='text-center'>
        <Card.Header as="h5">Temporizador</Card.Header>
        <Card.Body>
            <Card.Title>{props.tempo}</Card.Title>
            <Card.Text>
            Agora são {new Date().toLocaleTimeString()}.
            </Card.Text>
            <Button variant="primary">Contar</Button>
        </Card.Body>
        </Card>
        </div>
    )
}
setInterval( 1000);

export default Cards;
