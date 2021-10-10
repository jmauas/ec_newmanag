import React from 'react'
import './ItemListContainer.css';
import {Card, Button} from 'react-bootstrap'
import { FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const Item = ( {id, nombre, precio, img, categ} ) => {
    return (
        <div className="col col-xs-12 col-s-6 col-m-4 col-l-3 col-xl-2.5">
            <Card className="item-card">
                <Link to={`/detalle/${id}`}>
                    <Card.Img variant="top" src={img} className="fotoList"/>
                </Link>
                <Card.Body>
                    <Card.Title className="tituloList">{nombre}</Card.Title>
                    <Card.Title className="precioList">Precio: $ {precio}-</Card.Title>
                    <Link to={`/detalle/${id}`}>
                        <Button variant="secondary" className="botonCarro"><FaPlus color="#FF305D" size="25px"/> Ver Detalle</Button>
                    </Link>
                    <Card.Text>{categ} SKU: {id}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}