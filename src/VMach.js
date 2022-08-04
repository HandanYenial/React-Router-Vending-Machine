import React from 'react'
import {Link} from 'react-router-dom';

function VMach() {
  return (
    <div>
        <h1> Vending Machine </h1>
        <img 
            src = "https://media.giphy.com/media/3orieJKdBJeQIfKqiY/giphy.gif"
            alt = "vending machine"
        />
        <div>
          <ul>
            <li><Link to = "/coke">Coke</Link></li>
            <li><Link to = "/doritos">Doritos</Link></li>
            <li><Link to = "/juice">Juice</Link></li>
            <li><Link to = "/kitkat">Kitkat</Link></li>
            <li><Link to = "/oreo">Oreo</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default VMach