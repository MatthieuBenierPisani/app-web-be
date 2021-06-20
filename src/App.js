import React, { Component } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/LoginComponent";
import SignUp from "./components/SignUpComponent";
import ForgottenPassword from "./components/ForgottenPassword";

import AuthButton from "./components/AuthButton";

/*CHECK IF LOGGED CLASS
class LoggedInChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {

    LOGGED IN CHECKER

    let {isLoggedIn} = this.state;

    const renderAuthButton = () => {
      if (isLoggedIn) {
        return <button>Logout</button>;
      } else {
        return <button>Login</button>;
      }
    }

    IN THE RETURN : <AuthButton isLoggedIn={isLoggedIn} />
    
    
    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
      </div>
    );
  }
}
*/

function App() {
  return (<Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/se-connecter" component={Login} />
            <Route path="/s'inscrire" component={SignUp} />
            <Route path="/mot-de-passe-oublie" component={ForgottenPassword} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;