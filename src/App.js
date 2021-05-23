import './App.css';
import HomePage from './Screen/HomePage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/'> <HomePage></HomePage> </Route>
        </Switch>
        <Footer></Footer>
      </Router>  
    </div>
  );
}

export default App;
