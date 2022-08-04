
import './App.css';
import Coke from"./Coke";
import Doritos from "./Doritos";
import Juice from "./Juice";
import Kitkat from "./Kitkat";
import Oreo from "./Oreo";
import VMach from "./VMach";

import {BrowserRouter , Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Link to = "/">Vending Machine</Link>
         <Routes>
          <Route exact path ="/" element={<VMach />} />
          <Route exact path = "/coke" element = {<Coke/>}/>
          <Route exact path = "/doritos" element = {<Doritos/>}/>
          <Route exact path = "/juice" element = {<Juice/>}/>
          <Route exact path = "/kitkat" element = {<Kitkat/>}/>
          <Route exact path = "/oreo" element = {<Oreo/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
