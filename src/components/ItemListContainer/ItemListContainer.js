import React, {useEffect, useState} from "react";
import './ItemListContainer.css';
import {pedirProductos} from '../../helpers/pedirProductos' 
import { ItemsList } from "./itemsList";
import { useParams } from 'react-router-dom';
import { FaSearch, FaSync } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";

export const ItemListContainer = ({msgBusqueda}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [aBuscar, setABuscar] = useState('');
    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }
    const {category} = useParams()
    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                let filtrado = [];
                if (aBuscar !== '') {
                    for (let i of res) {
                        if (i.nombre.toString().toLowerCase().indexOf(aBuscar.toLowerCase()) >=0) {
                            filtrado.push(i);
                        }
                    }
                } else {
                    filtrado = res;
                }
                if (category) {
                    setItems( filtrado.filter( prod => prod.categ === category) )
                } else {
                    setItems( filtrado )
                }
            })
            .catch((err) => console.log(err))
            .finally(()=> {
                setLoading(false);
            })
    }, [category, aBuscar])

    const handleBusqueda = () => {
        if (busqueda.length>=3) {
            setABuscar(busqueda);
        } else {
            setABuscar('');
        }
    }
    const handleLimpiar = () => {setABuscar('')};

    const onKeyUp = (event) => {
        if (event.charCode === 13) {
          handleBusqueda();
        }
    }

    return (
        <>
            <div className="container-fluid" id="listContainer">
                <div className="row align-items-center">
                        {(loading) 
                            ? <p className="productos">{msgBusqueda}</p>
                            : <>
                                <Container>
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
                                <ItemsList productos={items}/>    
                            </>
                        }
                </div>
            </div>
        </>
    );
}
