import React, {useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'
import Display from './Components/Display'

function App() {
  const [count, setCount] = useState(0);

  const handleChange = () =>{
    setCount(count+1)
  }

  return (
    <div className="App">
      <Display count={count}/>
      <Dashboard handleChange = {handleChange}/>
    </div>
  );
}

export default App;
