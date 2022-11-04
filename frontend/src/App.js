//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Reserve from './components/Reserve';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//npm install react-router-dom@5.2.0

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path ="/" exact component = {Reserve} />
            <Route path ="/login" exact component = {Login} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
