import React, {useContext, useState, useEffect} from "react";
import '../Carrito/Carrito.css';
import { useHistory } from 'react-router';
import { FormatosContext } from '../../context/FormatosContext';
import { Container, Alert, Table, Button, } from "react-bootstrap";
import { FaBackspace as Back } from 'react-icons/fa';
import { pedirOrdenes } from "../../firebase/pedirOrdenes";
import { BusquedaContext } from "../../context/BusquedaContext";


export const Ordenes = () => {
    const {formatoSepMiles} = useContext(FormatosContext);
    const {goBack} = useHistory();
    const [orders, setOrders] = useState([]);
    const {usuario} = useContext(BusquedaContext);


    useEffect(() => {
        pedirOrdenes(usuario.email, (res) => {
            setOrders(res);
        })       
    }, [orders, setOrders, usuario.email])
  
    return (
        <>
            <Container>
                <> {
                        orders.length === 0
                        ?   <>
                                <Alert variant="warning m-3">No Existen Compras Anteriores.</Alert>
                                <Button variant="success" onClick={() => goBack()}><Back color="white" size="25px"/> Volver A Comprar</Button>
                            </>
                        :    
                            <>           
                            <Table bordered hover variant="success" size="sm">
                                    {        
                                        orders.map((order) => (
                                            <>
                                            <thead>
                                                <tr>
                                                    <th colSpan="2">Fecha Órden</th>
                                                    <th>Cantidad Items</th>
                                                    <th>Total Órden</th>
                                                </tr>
                                            </thead> 
                                            <tbody>
                                                <tr key={order.id} className="filaProducto" valign="middle">
                                                    <td colSpan="2"><span className="mx-3">{order.date.toDate().toLocaleString('en-GB', { timeZone: 'UTC' })}</span></td>
                                                    <td className="importeCarrito">{formatoSepMiles(order.cantTotal, 0)}</td>
                                                    <td className="importeCarrito">{formatoSepMiles(order.total, 0)}</td>
                                                </tr>
                                                <tr>
                                                    <th>Producto</th>
                                                    <th>Cantidad</th>
                                                    <th>Precio</th>
                                                    <th>Total</th>
                                                </tr>
                                                {
                                                    order.items.map((item) => (
                                                        <tr key={item.id} className="filaProducto" valign="middle">
                                                            <td><span className="mx-3">{item.sku+' - '+item.nombre}</span></td>
                                                            <td className="importeResumen">{formatoSepMiles(item.cantidad, 0)}</td>
                                                            <td className="importeResumen">{formatoSepMiles(item.precio, 0)}</td>
                                                            <td className="importeResumen">{formatoSepMiles(item.cantidad * item.precio, 0)}</td>
                                                        </tr>
                                                    ))
                                                }
                                                <tr className="table table-dark" valign="middle">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                            </>                              
                                        ))
                                    }                                    
                            </Table>
                            <div className="row align-items-center mt-5">
                                <div className="col col-4">
                                    <Button variant="success" onClick={() => goBack()}><Back color="white" size="25px"/> Volver A Comprar</Button>
                                </div>               
                            </div>                        
                        </>
                    }
                </>           
            </Container> 
        </>
    );

}