import {HomeView} from './components/HomeView/HomeView';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function App() {
  const nombreEmpresa = 'Cotillón Casa Chiche';
  const urlLogoPpal = 'logo512.png';
  const prod = 'Cargando los Productos. Aguardá un Momento, Por Favor .....';

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar nombreEmpresa={nombreEmpresa} urlLogoPpal={urlLogoPpal}/>
        <HomeView nombreEmpresa={nombreEmpresa} urlLogoPpal={urlLogoPpal} />
        <Switch>
          <Route exact path="/">
            <ItemListContainer productos={prod} />
          </Route>
          <Route exact path="/productos/:category">
            <ItemListContainer productos={prod} />
          </Route>
          <Route exact path="/detalle/:prodId">
            <ItemListContainer productos={prod} />
          </Route>
          <Route exact path="/carrito">  
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
