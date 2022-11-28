import './App.css';
import React, { useState, useEffect } from 'react';

import Data from './data/data.json'

const Mapper = ({ data }) => {
  const [show, setShow] = useState(-1)


  return (
    <div className="container" >
      {data.map((item, index) => {
        return (
          <div key={item.topic.hash}>
            <button onClick={() => { setShow(index) }}><a href={item.topic.hash} >{item.topic.title}</a></button>
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
      <Mapper data={Data} />
    </div>
  );
}

export default App;
