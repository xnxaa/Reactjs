import logo from './logo.svg';
// import komponen
import Counter from './components/Counter'
import './App.css';
import { ButtonGoogle } from './components/ButtonGoogle';

function App() {
  return (
    <div className="App">
      {/* tambah komponen */}
      <ButtonGoogle/>
    </div>
  );
}

export default App;
