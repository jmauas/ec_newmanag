import React, {useEffect, useState} from "react";
import './ItemDetalleContainer.css';
import {pedirProductos} from '../../helpers/pedirProductos' 
import { ItemDetalle } from "./ItemDetalle";
import { useParams } from 'react-router-dom';

export const ItemDetalleContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState([]);
    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                if (itemId) {
                    setItem(res.find(prod => prod.id === Number(itemId)))
                } else {
                    setItem();
                }
            })
            .catch((err) => console.log(err))
            .finally(()=> {
                setLoading(false)
            })
    }, [itemId])

    return (
        <>
            {
                loading ? <p className="productos">Cargando Detalles del Producto ...</p>
                : <ItemDetalle {...item}/>    
            }
        </>
    );
}
