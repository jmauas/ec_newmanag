import {HomeView} from './components/HomeView/HomeView';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  const nombreEmpresa = 'Cotillón Casa Chiche';
  const urlLogoPpal = 'logo512.png';
  const prod = 'En esta Sección van a estar los Productos.';

  return (
    <div className="App">
      <NavBar nombreEmpresa={nombreEmpresa} urlLogoPpal={urlLogoPpal}/>
      <HomeView nombreEmpresa={nombreEmpresa} urlLogoPpal={urlLogoPpal} />
      <ItemListContainer productos={prod} />
    </div>
  );
}

export default App;
