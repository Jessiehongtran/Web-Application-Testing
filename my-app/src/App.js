import React, {useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'
import Display from './Components/Display'

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [hit, setHit] = useState(0);

  const handleBall = () =>{
    if (ball === 3) {setBall(ball-ball); setStrike(ball-ball)}
    else {setBall(ball+1)}
  }

  const handleStrike = () =>{
    if (strike === 2) {setStrike(strike-strike); setBall(strike-strike)}
    else {setStrike(strike+1)}
  }

  return (
    <div className="App">
      <Display ball={ball} strike={strike}/>
      <Dashboard handleBall = {handleBall} handleStrike = {handleStrike}/>
    </div>
  );
}

export default App;
