import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/index'
import HomePage from './components/Pages/HomePage/index';
import Addidas from './components/Pages/Addidas/index';
import Balenciaga from './components/Pages/Balenciaga/index';
import Converse from './components/Pages/Converse/index';
import Nike from './components/Pages/Nike/index';
import Cart from './components/Pages/Cart/index'

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/addidas">
              <Addidas />
            </Route>
            <Route path="/balenciaga">
              <Balenciaga />
            </Route>
            <Route path="/converse">
              <Converse />
            </Route>
            <Route path="/nike">
              <Nike />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
