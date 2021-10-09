import React, {useEffect, useState} from "react";
import './ItemListContainer.css';
import {pedirProductos} from '../../helpers/pedirProductos' 
import { ItemsList } from "./itemsList";
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({productos}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                if (categoryId) {
                    setItems( res.filter( prod => prod.categ == categoryId) )
                } else {
                    setItems( res )
                }
            })
            .catch((err) => console.log(err))
            .finally(()=> {
                setLoading(false)
            })
    }, [categoryId])

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
