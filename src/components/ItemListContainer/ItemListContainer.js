import React, {useEffect, useState, useContext} from "react";
import { AppContext } from "../../application/provider";
import './ItemListContainer.css';
import {pedirProductos} from '../../helpers/pedirProductos' 
import { ItemsList } from "./itemsList";
import { useParams } from 'react-router-dom';


export const ItemListContainer = ({msgBusqueda}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);
    const [aBuscar, setABuscar] = useContext(AppContext);
    
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

    return (
        <>
            <div className="container-fluid" id="listContainer">
                <div className="row align-items-center">
                        {(loading) 
                            ? <p className="productos">{msgBusqueda}</p>
                            : <>
                                
                                <ItemsList productos={items}/>    
                            </>
                        }
                </div>
            </div>
        </>
    );
}
