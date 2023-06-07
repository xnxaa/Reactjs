import logo from './logo.svg';
// import komponen
import './App.css';
import { FormCarControlled } from './components/FormCar';
import { FormCarUncontrolled } from './components/FormCar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* tambah komponen */}
      <FormCarControlled/>
      <FormCarUncontrolled/>
    
    </div>
  );
}

export default App;
