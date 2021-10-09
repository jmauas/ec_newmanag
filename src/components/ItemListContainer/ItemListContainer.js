import React, {useEffect, useState} from "react";
import './ItemListContainer.css';
import {pedirProductos} from '../../helpers/pedirProductos' 
import { ItemsList } from "./itemsList";
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({productos}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                if (category) {
                    setItems( res.filter( prod => prod.categ === category) )
                } else {
                    setItems( res )
                }
            })
            .catch((err) => console.log(err))
            .finally(()=> {
                setLoading(false)
            })
    }, [category])

    return (
        <>
            <div className="container-fluid" style={{marginLeft:'50px'}}>
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
