import Busqueda from './context/BusquedaContext';
import CarritoProvider from './context/CarritoContext';
import FormatosProvider from './context/FormatosContext';
import {HomeView} from './components/HomeView/HomeView';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Carrito } from './components/Carrito/Carrito';
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

  return (
    <div className="App">
      <Busqueda>
        <FormatosProvider>
          <CarritoProvider>
            <BrowserRouter>
              <NavBar nombreEmpresa={nombreEmpresa} urlLogoPpal={urlLogoPpal}/>
              <div id="contenidoPpal">
                <HomeView nombreEmpresa={nombreEmpresa} urlLogoPpal={urlLogoPpal} />
                <Switch>
                  <Route exact path="/">
                    <ItemListContainer />
                  </Route>
                  <Route exact path="/productos/:category">
                    <ItemListContainer />
                  </Route>
                  <Route exact path="/detalle/:itemId">
                    <ItemDetalleContainer />
                  </Route>
                  <Route exact path="/carrito">
                    <Carrito/>
                  </Route>
                  <Route path="*">
                    <Redirect to="/"/>
                  </Route>
                </Switch>
              </div>
            </BrowserRouter>
          </CarritoProvider>
        </FormatosProvider>
      </Busqueda>
    </div>
  );
}

export default App;
