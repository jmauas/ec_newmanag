import React from "react";
import { Item } from './Item'

export const ItemsList = ({productos = []}) => {
    return  (
        <>
            {productos.length>0 
                ? productos.map((item) => <Item {...item} key={item.id}/>) 
                : <h2>Sin Productos en Esta Categoria ....</h2>}
        </>
    )
}