import React from "react";
import './HomeView.css';
import { NavLink } from 'react-router-dom';

export const HomeView = ({nombreEmpresa, urlLogoPpal}) => {
    return (
        <>
            <div className="container" id="home">
                <div className="row align-items-center">
                    <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <NavLink exact to="/"><img src={process.env.PUBLIC_URL+'/'+urlLogoPpal} className="logoPpal" alt="logo empresa" /></NavLink>
                    </div>
                    <div className="col col-xl-9 col-lg-6 col-md-6 col-sm-12 align-self-center">
                        <div className="row align-items-center">
                            <h1 className="tituloPpal">{nombreEmpresa}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
