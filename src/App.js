import { useEffect, useState } from 'react';
import './App.css';
import VVComponent from './vv/VVComponent';

function App() {

  const [boxIsHighlighted, setBoxIsHighlighted] = useState(false);

  const [count, setCount] = useState(0);

  const bumpHandler = () => {
    console.log("vv")
    setCount(count + 1);
  }

  const boxClasses = `box ${boxIsHighlighted ? 'bump' : ''}`;

  useEffect(() => {
    if(count===0){
      console.log("exit")
      return;
    }
    console.log("bump")
    setBoxIsHighlighted(true);

    setTimeout(()=>{
      setBoxIsHighlighted(false);
    },100);
  },[count])

  return (
    <div className="App">
      <header className="App-header">
        <div className={boxClasses}>{count}</div><br />
        <VVComponent onBump={bumpHandler} />
      </header>
    </div>
  );
}

export default App;
