import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/NavBar";
import Alert from "./components/layout/Alert";
import Home from "./components/page/Home";
import GithubState from "./context/github/action";
import AlertState from "./context/alert/action";
import User from "./components/user";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:login" component={User} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
