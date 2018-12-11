import React, { Component } from 'react';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import LaunchHistory from "./Components/LaunchHistory";
import UpcomingLaunches from "./Components/UpcomingLaunches";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="browser-router">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/upcoming" component={UpcomingLaunches} />
            <Route exact path="/history" component={LaunchHistory} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
