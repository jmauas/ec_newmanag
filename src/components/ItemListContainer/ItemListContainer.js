import React, {useEffect, useState, useContext} from "react";
import { BusquedaContext } from "../../context/BusquedaContext";
import './ItemListContainer.css';
import {pedirProductos} from '../../firebase/pedirProductos' 
import { ItemsList } from "./itemsList";
import { useParams } from 'react-router-dom';
import { Loader } from "../Loader/Loader";


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);
    const {busqueda, setBusqueda} = useContext(BusquedaContext);
    let {category} = useParams();

    if (category===undefined) category='';
    if (busqueda===undefined) setBusqueda('');
    useEffect(() => {
        setLoading(true);
        pedirProductos(category, (res) => {
            let filtrado = [];    
            if (busqueda !== '') {
                for (let i of res) {
                    if (i.nombre.toString().toLowerCase().indexOf(busqueda.toLowerCase()) >=0) {
                        filtrado.push(i);
                    }
                }
            } else {
                filtrado = res;
            }
            setItems( filtrado ); 
            setLoading(false);
        });
    }, [category, busqueda])


    return (
        <>
            <div className="container-fluid" id="listContainer">
                <div className="row align-items-center">
                        {(loading) 
                            ? <Loader />
                            : <>                                
                                <ItemsList productos={items}/>    
                            </>
                        }
                </div>
            </div>
        </>
    );
}
