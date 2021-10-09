import React from "react";
import { Item } from './Item'

export const ItemsList = ({productos = []}) => {
    return  (
        <div className="container-fluid">
            <div className="row align-items-center">                   
                {productos.map((item) => <Item {...item} key={item.id}/>)}
            </div>
        </div>
    )
}