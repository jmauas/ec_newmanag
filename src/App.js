import Busqueda from './application/provider';
import {HomeView} from './components/HomeView/HomeView';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import { ItemDetalleContainer } from './components/ItemDetalleContainer/ItemDetalleContainer';
import React from "react";

function App() {
  const nombreEmpresa = 'Cotillón Casa Chiche';
  const urlLogoPpal = 'logo512.png';
  const msgBusqueda = 'Cargando los Productos. Aguardá un Momento, Por Favor .....';

  return (
    <div className="App">
      <Busqueda>
        <BrowserRouter>
          <NavBar nombreEmpresa={nombreEmpresa} urlLogoPpal={urlLogoPpal}/>
          <div id="contenidoPpal">
            <HomeView nombreEmpresa={nombreEmpresa} urlLogoPpal={urlLogoPpal} />
            <Switch>
              <Route exact path="/">
                <ItemListContainer msgBusqueda={msgBusqueda} />
              </Route>
              <Route exact path="/productos/:category">
                <ItemListContainer msgBusqueda={msgBusqueda} />
              </Route>
              <Route exact path="/detalle/:itemId">
                <ItemDetalleContainer />
              </Route>
              <Route exact path="/carrito">  
              </Route>
              <Route path="*">
                <Redirect to="/"/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Busqueda>
    </div>
  );
}

export default App;
