import CardGenerator from './components/CardGenerator';
import Cards from './components/Cards';
import './styles/css/App.css';

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1 className="title">Lista de Afazeres</h1>
        <h3 className="subtitle">Coloque aqui a suas tarefas do dia para ter um melhor controle</h3>
        <CardGenerator />
        <Cards />
      </div>
    </div>
  );
}

export default App;