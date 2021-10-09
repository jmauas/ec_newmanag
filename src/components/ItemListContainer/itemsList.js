import React from "react";
import { Item } from './Item'

export const ItemsList = ({productos = []}) => {
    return  (
        <div className="container-fluid">
            <div className="row align-items-center">
                {productos.length>0 
                    ? productos.map((item) => <Item {...item} key={item.id}/>) 
                    : <h2>Sin Productos en Esta Categoria ....</h2>}
            </div>
        </div>
    )
}