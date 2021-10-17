import React, {useContext, useEffect, useState} from "react";
import './HomeView.css';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/BusquedaContext';
import { FaSearch, FaSync, FaShoppingCart as Carro } from 'react-icons/fa';
import { Container, Row, Col, Toast, ToastContainer, Badge } from "react-bootstrap";
import { CarritoContext } from "../../context/CarritoContext";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import 'animate.css';



export const HomeView = ({nombreEmpresa, urlLogoPpal}) => {
    const [busqueda, setBusqueda] = useState('')
    const [buscar, setBuscar] = useContext(AppContext);
    const {carrito, calcularCantidad} = useContext(CarritoContext);
    const [show, setShow] = useState(false);
    let history = useHistory();
    let location = useLocation();

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }
    const handleBtnBusqueda = () => {
        if (busqueda.length>=3) {
            if (location.pathname =='/carrito') {
                <Redirect to="/"/>
            }
            handleBusqueda();
        }
    }
    const handleBusqueda = () => {
        if (busqueda.length>=3) {
            setBuscar(busqueda);
        } else {
            setBuscar('');
        }
    }
    const handleLimpiar = () => {setBusqueda('')};

    const onKeyUp = (event) => {
        if (event.charCode === 13) {
          handleBusqueda();
        }
    }

    useEffect(() => {
        handleBusqueda();
    }, [busqueda])
    useEffect(() => {
        if (carrito.length>0) setShow(true);
    }, [])

    return (
        <>
            <div className="container" id="home">
                <ToastContainer position="top-end" className="p-3">
                    <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide bg="warning">
                        <Toast.Header>
                            <Carro color="red" size="25px"/>
                            <strong className="me-auto">{'\u00A0\u00A0\u00A0\u00A0 Notificación'}</strong>
                        </Toast.Header>
                        <Toast.Body><span className="textoToast">Recuperamos Tu Carrito de Compras. Podes Continuar Comprando.</span></Toast.Body>
                    </Toast>
                </ToastContainer>
                <div className="row align-items-center">
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <NavLink exact to="/"><img src={process.env.PUBLIC_URL+'/'+urlLogoPpal} className="logoPpal" alt="logo empresa" /></NavLink>
                    </div>
                    <div className="col col-xl-8 col-lg-6 col-md-6 col-sm-12 align-self-center">
                        <div className="row align-items-center">
                            <Container>
                                <Row>
                                    <h1 className="tituloPpal">{nombreEmpresa}</h1>
                                </Row>
                                <Row className="filaBusqueda">
                                    <Col className="col-xs-8 col-s-6 col-m-5 col-l-4 col-xl-4">
                                        <input type="text" className="textoBusqueda" placeholder="Ingrese Texto a Buscar" value={busqueda} onKeyPress={onKeyUp} onChange={handleInputChange}/>
                                    </Col>
                                    <Col className="col-4">
                                        <button className="btn btn-secondary" onClick={handleBtnBusqueda}><FaSearch/> Buscar</button>
                                        <button className="btn btn-secondary m-2" id="btnLimpiar" onClick={handleLimpiar}><FaSync/> Limpiar</button>
                                    </Col>
                                    <Col className="col-4">
                                        {
                                            calcularCantidad()
                                             ?
                                                <Link to="/carrito">
                                                    <Carro color="red" size="40px" className="animate__animated animate__bounce" id="carritoAnimar"/>
                                                    <Badge pill bg="warning" text="dark" className="textoCantCarrito animate__animated animate__bounce animate__delay-1s">{calcularCantidad()}</Badge>
                                                </Link>
                                            :<></>
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
