import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter step={3} />
    </div>
  );
}

export default App;
