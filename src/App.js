import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;
