import React, {useEffect, useState} from "react";
import './ItemDetalleContainer.css';
import { pedirProducto } from '../../firebase/pedirProductos' 
import { ItemDetalle } from "./ItemDetalle";
import { useParams, Redirect } from 'react-router-dom';
import { Loader } from "../Loader/Loader";
import Swal from "sweetalert2";

export const ItemDetalleContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState([]);
    const {itemId} = useParams();

    const noExiste = () => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Este Producto No Existe',
            showConfirmButton: false,
            timer: 2500
        })
    }

    useEffect(() => {
        setLoading(true);
        pedirProducto(itemId, (res) => {
            setItem(res);
            setLoading(false);
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
                        ? <>
                            {noExiste()}
                            <Redirect to="/"/>;                   
                          </>
                        : <>
                            <ItemDetalle {...item}/>    
                          </>
                    }
                  </>
            }
        </>
    );
}
