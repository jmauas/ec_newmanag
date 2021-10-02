import React from "react";
import './HomeView.css';

export const HomeView = ({nombreEmpresa, urlLogoPpal}) => {
    return (
        <>
            <div className="container-fluid" style={{marginLeft:'50px'}}>
                <div className="row align-items-center">
                    <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <img src={urlLogoPpal}  className="logoPpal" alt="logoPpal" />
                    </div>
                    <div className="col col-xl-9 col-lg-6 col-md-6 col-sm-12">
                        <h1 className="tituloPpal">{nombreEmpresa}</h1>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12">
                        <h3>Home de la web de E-commerce para {nombreEmpresa}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
