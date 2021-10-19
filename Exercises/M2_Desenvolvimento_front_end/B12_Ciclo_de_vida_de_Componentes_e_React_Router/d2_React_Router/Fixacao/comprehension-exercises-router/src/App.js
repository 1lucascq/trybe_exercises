import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import StrictAccess from "./components/StrictAcess";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Switch* */}
        <Switch>
          <Link to="/">Home</Link>
          <span> - </span>
          <Link to="/users/:Jao">Users</Link>
          <span> - </span>
          <Link to="/about">About</Link>
          <span> - </span>
          <Link to="/StrictAccess">Strict Access</Link>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            exact path="/users/:id"
            render={(props) => (
              <Users {...props} greetingsMessage="Good Morning" />
            )}
          />          
          <Route
            exact path="/strictAccess"
            render={(props) => (
              <StrictAccess {...props} user={ {username:"joao", password:"1234"} } />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
