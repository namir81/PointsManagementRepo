import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//import { Router, Route} from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';    
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import PrivateRoute from './PrivateRoute';
import { firebaseApp } from './firebase';
import './index.css';
import App from './components/App';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Admin from './components/Admin';
import Points from './components/Points';
import { AuthProvider } from './auth';
import Nav from "react-bootstrap/Nav";

/* firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
      //console.log('user has signed in or up', user);
      const { email } = user;
     // store.dispatch(logUser(email));
      //browserHistory.push('/app');
      f.toHome();
    //history.push('/app');
    
  }
  else {  
      //console.log('user has signed out or still needs to sign in');
     // browserHistory.replace('/signin');
    // history.push('/signin');
    f.toSignIn();
  }
}) */


//ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore(reducer);

ReactDOM.render( 
    <Provider store={store}>
    <AuthProvider>
      <Router>
      <div>
      {/*   <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active"><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li class="nav-item"><Link to={'/login'} className="nav-link">Log In</Link></li>
            <li class="nav-item"><Link to={'/signup'} className="nav-link">Sign Up</Link></li>
          </ul>
        </nav> */}
     {/*    <nav className="navbar navbar-expand-lg">
          <ul className="nav navbar-nav">
            <li class="active"><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/login'} className="nav-link">Log In</Link></li>
            <li><Link to={'/signup'} className="nav-link">Sign Up</Link></li>
          </ul>
        </nav> */}
       <Nav variant="pills" activekey="home">
          <Nav.Item>
            <Nav.Link  eventKey="home" href="/admin">Admin</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  eventKey="points" href="/points">Points</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login" eventKey="login">Log In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/signup" eventKey="signin">Sign Up</Nav.Link>
          </Nav.Item>
        </Nav> 
        <hr />
        <Switch>
            <Route exact path='/admin' component={Admin} />
            <PrivateRoute exact path='/points' component={Points} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </Router>
  </AuthProvider>
  </Provider>
    ,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
