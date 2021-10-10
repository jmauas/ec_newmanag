import React from 'react'
import './ItemDetalleContainer.css';
import {Button} from 'react-bootstrap'
import { FaCartPlus as Carro, FaBackspace as Back, FaCashRegister as Pagar } from 'react-icons/fa';
import { useHistory } from 'react-router';

export const ItemDetalle = ( {id, nombre, precio, img, categ, descrip, stock} ) => {
    const {goBack} = useHistory();
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={img}  className="imgPpal" alt={nombre} />
                </div>
                <div className="col">
                    <div className="row">
                        <h2 className="tituloItem">{nombre}</h2>
                    </div>
                    <hr/>
                    <div className="row">
                        <p className="subTituloItem">SKU {id} --- {categ}</p>
                    </div>
                    <hr/>
                    <div className="row">
                        <p className="subTituloItem">Cantidad Disponible {stock} </p>
                    </div>
                    <hr/>
                    <div className="row">
                        <p className="precioDetalle">Precio: $ {precio}-</p>
                    </div>                    
                    <div className="row align-items-center mt-5">
                        <div className="col col-4">
                            <span className="subTituloItem">Cantidad : </span><input type="number" defaultValue="1" className="cantP"/>
                        </div>                    
                        <div className="col col-4">
                            <Button variant="secondary"><Carro color="white" size="25px"/> Agregar al Carrito</Button>
                        </div> 
                        <div className="col col-4">
                            <Button variant="success"><Pagar color="white" size="25px"/> Ir a Pagar</Button>
                        </div>                    
                    </div>     
                    <div className="row align-items-center mt-5">                  
                        <div className="col col-4">
                            <Button variant="secondary" onClick={() => goBack()}><Back color="white" size="25px"/> Volver Atras</Button>
                        </div>                  
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <p className="descrip">{descrip}</p>
                </div>
            </div>
        </div>
    )
}