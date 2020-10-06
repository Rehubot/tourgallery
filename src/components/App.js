import React, { Component } from "react";
import { connect } from 'react-redux';
import Sidebar from "./Sidebar";
import About from "./About";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Event from "./Event";
import { BrowserRouter as Router,withRouter, Route, Switch } from "react-router-dom";
import loadScript from "../hooks/loadScript";

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
const routes = [
  {
    name: "home",
    path: "/",
    exact: true,
    main:  <Home />,
  },
  {
    name: "home",
    path: "/home",
    main:  <Home />,
  },
  {
    name: "gallery",
    path: "/gallery",
    main:  <Gallery />,
  },
  {
    name: "events",
    path: "/events",
    main:  <Event />,
  },
  {
    name: "faq",
    path: "/faq",
    main: <FAQ />,
  },
  {
    name: "aboutus",
    path: "/aboutus",
    main:  <About />,
  },
  {
    name: "contactus",
    path: "/contactus",
    main:  <Contact />,
  },
];
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar />
        </div>
        <div className="annie-main">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={route.main}
              />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authentication.token,
  };
};

const MainContainer = withRouter(connect(mapStateToProps, null)(App)); 
export default App;
