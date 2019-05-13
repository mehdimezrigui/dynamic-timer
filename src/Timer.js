import React from 'react'

export default function Timer({hour,mins,secs}) {
  return (
      
      <div className="border1">
        <div className="header"></div>
        <div className="main">
        <br /><br/><br/>
        <p><span id="hour">{hour}</span>:<span id="minute">{mins}</span>:<span id="second">{secs}</span></p>
        <p><span className="text">Hour</span><span className="text">Minute</span><span className="text">Second</span></p>
        <br /><br /><br/><div><span className="btnstart">Start</span><span className="btnreset">Reset</span></div>
        </div>
        <div className="footer"></div>
      </div>
    
  )
}
