import { Component } from 'react';
import { Route,Switch,Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import Home from "./components/Home";
import BooksList from './components/BooksList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import NotFound from './components/NotFound';

import './App.css';

class App extends Component{
  render(){
    return(
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/books" component={BooksList}/>
        <Route exact path="/books/:id" component={BookDetails}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/checkout" component={CheckOut}/>
        <Route exact path="/not-found" component={NotFound}/>
        <Redirect to="/not-found"/>
      </Switch>
      
    )
  }
}


export default App;