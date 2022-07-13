import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import {useState} from 'react'

function App() {

  const [foodies, foodiesUpdate] = useState(foods)

  return (
    <div className="App">
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default App;
