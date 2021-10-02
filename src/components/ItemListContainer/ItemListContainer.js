import React, {useEffect, useState} from "react";
import './ItemListContainer.css';
import {pedirProductos} from '../../helpers/pedirProductos' 
import { ItemsList } from "./itemsList";

export const ItemListContainer = ({productos}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);  

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((err) => console.log(err))
            .finally(()=> {
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className="container-fluid" style={{margin:'50px'}}>
                <div className="row align-items-center">
                    <div className="col">
                        {(loading) 
                            ? <p className="productos">{productos}</p>
                            : <>
                                <ItemsList productos={items}/>    
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
