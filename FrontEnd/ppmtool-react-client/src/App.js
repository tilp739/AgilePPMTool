import logo from "./logo.svg";
import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/addProject" element={<AddProject />} />
          </Routes>
        </div>
      </Router>
    </Provider>;
  }
}

export default App;
