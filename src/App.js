import './App.css';
import Accordions from './components/Accordions';
import accordions from './accordions';

function App() {
  return (
    <div className="App">
      <Accordions accordions= {accordions} />
    </div>
  );
}

export default App;
