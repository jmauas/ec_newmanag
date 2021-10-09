import React from 'react'
import './ItemListContainer.css';
import {Card, Button, Form, Stack} from 'react-bootstrap'
import { FaShoppingCart as Carro} from 'react-icons/fa';


export const Item = ( {id, nombre, precio, img, descrip} ) => {

    return (
        <Card border="info" style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descrip}</Card.Text>
                <Card.Title>Precio: $ {precio}-</Card.Title>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control type="number" defaultValue="1" className="cantP"/>
                    <div className="vr" />
                    <Button variant="secondary" className="botonCarro"><Carro color="#FF305D" size="25px"/> Agregar</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}