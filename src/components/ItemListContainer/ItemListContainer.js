import React, {useEffect, useState, useContext} from "react";
import { AppContext } from "../../context/BusquedaContext";
import './ItemListContainer.css';
import {pedirProductos} from '../../helpers/pedirProductos' 
import { ItemsList } from "./itemsList";
import { useParams } from 'react-router-dom';
import { Loader } from "../Loader/Loader";


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);
    const [aBuscar, setABuscar] = useContext(AppContext);
    let {category} = useParams();

    if (category===undefined) category='';
    if (aBuscar===undefined) setABuscar('');
    useEffect(() => {
        setLoading(true);
        pedirProductos(category, (res) => {
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
            setItems( filtrado ); 
            setLoading(false);
        });
    }, [category, aBuscar])


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
