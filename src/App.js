import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Data from './data/data.json'

const Mapper = ({ data }) => {
  const [show, setShow] = useState(-1)


  return (
    <div className="container" >
      {data.map((item, index) => {
        return (
          <div key={item.topic.hash}>
            <button onClick={() => { setShow(index) }} className={((index === show) ? 'highlighted' : '')}><Link to={"/" + item.topic.hash} className={((index === show) ? 'highlighted' : '')} >{item.topic.title}</Link></button>
            {index === show &&
              item.childrens && <Mapper data={item.childrens} />

            }
          </div>
        )

      })}
    </div>
  )

}

function App() {
  return (
    <div className="App">
      <h1><a href="/">Scream Home</a></h1>
      <Router>
        <Mapper data={Data} />
      </Router>
    </div>
  );
}

export default App;
