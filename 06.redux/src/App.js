// import komponen
import Counter from './components/Counter';
import './App.css';
import { FormUser } from './components/FormUser';

function App() {
  return (
    <div className="App">
      {/* tambah komponen */}
      <Counter/>
      <FormUser/>
    </div>
  );
}

export default App;
