import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
