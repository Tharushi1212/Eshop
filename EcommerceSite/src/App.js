import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home';
import Footer from './Footer';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
import {useHistory} from 'react-router-dom'
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'



function App() {
  const history = useHistory();
  return (
<Router history={history}>

      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/">
            <Header/>
           <CartProvider>
            <Home/>
            <Cart/>
            </CartProvider> 
            <Footer/>

          </Route>

        </Switch>
    
      </div>
      </Router>
  );
}

export default App;
