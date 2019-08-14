import React from 'react';
import Portfolio from './Components/Portfolio'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Presentation from './Components/Presentation';
import Chat from './Components/Chat';
import './App.css';


function App() {
  return (
    <div className="App">
        <div className='portfolio'>Portfolio</div>
        <div className ='section'>
         <Router>
           <div className= 'menu'>
             <li>
               <Link to = "/"> Portfolio</Link>
             </li>
             <li>
               <Link to ="/presentation">Presentation</Link>
             </li>
             <li>
                 <Link to ="/chat">ChatBot</Link>
             </li>
           </div>
             <Route exact path="/" component={Portfolio} />
             <Route path="/presentation" component={Presentation} />
             <Route path="/chat" component={Chat}/>
         </Router>
         <div className='picture'></div>
       </div>
    </div>
  );
}

export default App;
