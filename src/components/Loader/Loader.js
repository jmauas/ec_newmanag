import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loader.css'

export const Loader = () => {

    return (
        <div className="loader">
            <Spinner animation="grow" variant="info" className="m-5" size="xl"/>
            <h2 className="cargando">Cargando...</h2>
            <Spinner animation="grow" variant="info" className="m-5" size="xxl"/>
        </div>
    )
}