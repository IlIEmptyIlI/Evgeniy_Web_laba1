import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Troll from './components/Troll';
import troll from './img/Troll.jpg'
import Wiki from './components/Wiki';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Welcome />
        <img src={logo} className="App-logo" alt="logo" />
        <Wiki />
        <Troll image={troll} />
        <img src={troll} />
      </header>
    </div>
  );
}

export default App;
