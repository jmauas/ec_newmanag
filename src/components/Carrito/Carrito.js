import React, {useContext} from "react";
import './Carrito.css';
import { useHistory } from 'react-router';
import { CarritoContext } from '../../context/CarritoContext';
import { FormatosContext } from '../../context/FormatosContext';
import { Container, Alert, Table, Button, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBackspace as Back, FaPlus, FaMinus, FaRegTrashAlt as Trash } from 'react-icons/fa';


export const Carrito = () => {
    const {carrito, vaciarCarrito, removeItem, calcularTotal, cambiarCant} = useContext(CarritoContext);
    const {formatoSepMiles} = useContext(FormatosContext);
    const {goBack} = useHistory();
    
    const handleCant = (e) => {
        cambiarCant(e.target.name, e.target.value)
    }
       
    return (
        <>
            <Container>
                {
                    carrito.length === 0
                    ?   <>
                            <Alert variant="warning m-3">No Hay Productos en el Carrito aún.</Alert>
                            <Button variant="success" onClick={() => goBack()}><Back color="white" size="25px"/> Volver A Comprar</Button>
                        </>
                    :    
                        <>           
                        <Table striped bordered hover variant="warning" size="sm">
                            <thead>
                                <tr>
                                    <th colSpan="3">PRODUCTO</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                    <th>Borrar</th>
                                </tr>
                            </thead> 
                            <tbody>
                                   {                                 
                                        carrito.map((prod) => (
                                            <tr key={prod.id} className="filaProducto" valign="middle">
                                                <td><Link to={`/detalle/${prod.id}`}><img src={process.env.PUBLIC_URL+prod.img}  alt={prod.nombre} className="imgCarrito" /></Link></td>
                                                <td><span className="mx-3">{prod.id}</span></td>
                                                <td><span className="mx-3 nombreProductoCarrito">{prod.nombre}</span></td>
                                                <td>
                                                    <Button variant="light sm mx-3" onClick={() => cambiarCant(prod.id, prod.cantidad-1)}><FaMinus color="#FF305D" size="15px"/></Button>
                                                    <input type="number" className="cantP" value={prod.cantidad} onChange={handleCant} name={prod.id}/>
                                                    <Button variant="light sm mx-3" onClick={() => cambiarCant(prod.id, prod.cantidad+1)}><FaPlus color="#FF305D" size="15px"/></Button>
                                                </td>
                                                <td className="importeCarrito">$ {formatoSepMiles(prod.precio, 2)}</td>
                                                <td className="importeCarrito">$ {formatoSepMiles(prod.cantidad * prod.precio, 0)}</td>
                                                <td><Button variant="danger mx-3" onClick={() => removeItem(prod.id)}><Trash color="white" size="25px"/></Button></td>
                                            </tr>                                        
                                        ))
                                    }                                    
                            </tbody>
                            <tfoot>
                                <tr className="totalCarrito">
                                    <td colSpan="4">IMPORTE TOTAL COMPRA</td>
                                    <td colSpan="2">$ {formatoSepMiles(calcularTotal(), 2)}</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </Table>
                        <div className="row align-items-center mt-5">                  
                            <div className="col col-6">
                                <Button variant="success" onClick={() => goBack()}><Back color="white" size="25px"/> Volver A Comprar</Button>
                            </div>  
                            <div className="col col-6">
                                <Button variant="danger" onClick={vaciarCarrito}><Trash color="white" size="30px"/> Vaciar Carrito</Button>
                            </div>                  
                        </div>                        
                    </> 
                }
            </Container> 
        </>
    );

}