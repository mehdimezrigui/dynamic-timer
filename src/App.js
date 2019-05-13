import React from 'react';
import './App.css';
import Timer from './Timer';
let date=60000;
let h = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let m = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
let s = Math.floor((date % (1000 * 60)) / 1000);
if(h<10){h="0"+h}
if(m<10){m="0"+m}
if(s<10){s="0"+s}
function App() {
  return (
    <div className="App">
    
      <Timer hour={h} mins={m} secs={s}/>
    </div>
  );
}

export default App;
