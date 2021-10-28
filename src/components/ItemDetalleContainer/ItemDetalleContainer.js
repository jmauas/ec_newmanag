import React, {useEffect, useState} from "react";
import './ItemDetalleContainer.css';
import {pedirProducto} from '../../helpers/pedirProductos' 
import { ItemDetalle } from "./ItemDetalle";
import { useParams, Redirect } from 'react-router-dom';
import { Loader } from "../Loader/Loader";

export const ItemDetalleContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState([]);
    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true);
        pedirProducto(itemId, (res) => {
            setItem(res);
            setLoading(false)
        })            
    }, [itemId])

    return (
        <>
            {
                loading 
                ? <Loader />
                : <>
                    { 
                        item.nombre===undefined
                        ? <Redirect to="/"/>
                        : <ItemDetalle {...item}/>    
                    }
                  </>
            }
        </>
    );
}
