import React from "react";
import './NavBar.css';
import { FaFutbol, FaCaretSquareRight as Flecha, FaScroll, FaBirthdayCake as Torta, FaShoppingCart as Carro} from 'react-icons/fa';
import {TiHome} from 'react-icons/ti';
import { NavLink } from 'react-router-dom'

export const NavBar = ({nombreEmpresa, urlLogoPpal}) => {
    return (
        <>
            <nav className="sideBar">
                <div className="barraNegra">'
                    <Flecha color="#FF305D" size="40px"/>    
                </div>
                <p className="s-nombre">{nombreEmpresa}</p>

                <ul>
                    <li><NavLink activeClassName={'activeLink'} className="items" exact to="/"><TiHome color="#FF305D" size="25px"/> Inicio</NavLink></li>
                    <li><NavLink activeClassName={'activeLink'} className="items" exact to="/productos/cotillon"><FaFutbol color="#00CBF4" size="25px"/> Cotillón</NavLink></li>
                    <li><NavLink activeClassName={'activeLink'} className="items" exact to="/productos/papeleria"><FaScroll color="#FFC200" size="25px"/> Papeleria</NavLink></li>
                    <li><NavLink activeClassName={'activeLink'} className="items" exact to="/productos/reposteria"><Torta color="#FF305D" size="25px"/> Repostería</NavLink></li>
                    <li><NavLink activeClassName={'activeLink'} className="items" exact to="/productos/distribucion"><FaFutbol color="#FFC200" size="25px"/> Distribución</NavLink></li>
                    <li><NavLink activeClassName={'activeLink'} className="items" exact to="/carrito"><Carro color="red" size="25px"/> VER CARRITO</NavLink></li>
                </ul>
                <NavLink exact to="/"><img src={urlLogoPpal}  className="s-logo" alt="logoPpal" /></NavLink>
            </nav>
        </>
    );
 }