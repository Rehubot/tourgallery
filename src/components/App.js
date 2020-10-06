import React, { Component } from "react";
import Sidebar from "./Sidebar";
import About from "./About";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import FAQ from "./FAQ";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import loadScript from "../hooks/loadScript";
// import Container from "./Container";

// const App = props => {
//   loadScript('../assets/js/jquery.min.js');
//   loadScript('../assets/js/modernizr-2.6.2.min.js');
//   loadScript('../assets/js/jquery.easing.1.3.js');
//   loadScript('../assets/js/bootstrap.min.js');
//   loadScript('../assets/js/jquery.waypoints.min.js');
//   loadScript('../assets/js/sticky-kit.min.js');
//   loadScript('../assets/js/jquery.fancybox.min.js');
//   loadScript('../assets/js/main.js');
// }
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Sidebar>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/events" component={Event} />
              <Route path="/faq" component={FAQ} />
              <Route path="/aboutus" component={About} />
              <Route path="/contactus" component={Contact} />
            </Sidebar>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
