
import Counter from './components/counter/Counter'
import CounterSass from '../src/components/counter-sass/Counter'


function App() {
  return (
    <div className="App">
      {/* tambah komponen */}
      <Counter/>
      <CounterSass/>
    </div>
  );
}

export default App;
