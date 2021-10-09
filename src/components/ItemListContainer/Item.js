import React from 'react'
import './ItemListContainer.css';
import {Card, Button} from 'react-bootstrap'
import { FaPlus} from 'react-icons/fa';


export const Item = ( {id, nombre, precio, img, categ} ) => {

    return (
        <Card className="item-card">
            <Card.Img variant="top" src={img} className="fotoList"/>
            <Card.Body>
                <Card.Title className="tituloList">{nombre}</Card.Title>
                <Card.Title className="precio">Precio: $ {precio}-</Card.Title>
                <Button variant="secondary" className="botonCarro"><FaPlus color="#FF305D" size="25px"/> Ver Detalle</Button>
                <Card.Text>{categ} SKU: {id}</Card.Text>
            </Card.Body>
        </Card>
    )
}