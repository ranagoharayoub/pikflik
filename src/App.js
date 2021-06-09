import './App.css';
import HomePage from './Screen/HomePage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import StickyButton from './Components/StickyButton';
import { useState } from 'react';
function App() {
  const [width, setwidth] = useState(window.innerWidth)

  const widthHandler = () => {
    setwidth(window.innerWidth)
  }

    window.onresize = widthHandler

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/'> <HomePage width={width}></HomePage> </Route>
        </Switch>
        <Footer></Footer>
        <StickyButton width = {width}></StickyButton>
      </Router>  
    </div>
  );
}

export default App;
