import LuasSegitiga from './components/LuasSegitiga'
import LuasLingkaran from './components/LuasLingkaran'
import './App.css';
import { useState } from 'react';
import { Counter } from './components/Counter';
import { CounterProvider } from './context/CounterProvider';
import { CounterTwoNum } from './components/CounterTwoNum';
import { FormText } from './components/FormText';
import { Nilai } from './components/Nilai';

function App() {
  const [page, setPage] = useState('LuasSegitiga')

  return (
    <div className="App">
      <CounterProvider>
      <button onClick={() =>setPage('LuasSegitiga')}>Luas Segitiga</button>
      <button onClick={() =>setPage('LuasLingkaran')}>Luas Lingkaran</button>
      {/* tambah komponen */}
    {
      page === 'LuasSegitiga' ? <LuasSegitiga/> : <LuasLingkaran/>
    }
    
    <Counter/>
  
    <CounterTwoNum/>
    <FormText/>
    <Nilai/>
    </CounterProvider>
    </div>
  );
}

export default App;
