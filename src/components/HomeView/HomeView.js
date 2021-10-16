import React, {useContext, useEffect, useState} from "react";
import './HomeView.css';
import { NavLink } from 'react-router-dom';
import  {AppContext} from '../../application/provider';
import { FaSearch, FaSync } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";

export const HomeView = ({nombreEmpresa, urlLogoPpal}) => {
    const [busqueda, setBusqueda] = useState('')
    const [buscar, setBuscar] = useContext(AppContext);
    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
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

    return (
        <>
            <div className="container" id="home">
                <div className="row align-items-center">
                    <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <NavLink exact to="/"><img src={process.env.PUBLIC_URL+'/'+urlLogoPpal} className="logoPpal" alt="logo empresa" /></NavLink>
                    </div>
                    <div className="col col-xl-9 col-lg-6 col-md-6 col-sm-12 align-self-center">
                        <div className="row align-items-center">
                            <Container>
                                <Row>
                                    <h1 className="tituloPpal">{nombreEmpresa}</h1>
                                </Row>
                                <Row className="filaBusqueda">
                                    <Col className="col-xs-8 col-s-6 col-m-5 col-l-4 col-xl-3">
                                        <input type="text" className="tituloBusqueda" placeholder="Ingrese Texto a Buscar" value={busqueda} onKeyPress={onKeyUp} onChange={handleInputChange}/>
                                    </Col>
                                    <Col className="col-4">
                                        <button className="btn btn-secondary" onClick={handleBusqueda}><FaSearch/> Buscar</button>
                                        <button className="btn btn-secondary m-2" id="btnLimpiar" onClick={handleLimpiar}><FaSync/> Limpiar</button>
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
