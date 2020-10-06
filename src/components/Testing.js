import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
const routes = [
  {
    path: "/home",
    exact: true,
    // sidebar: () => <div>home!</div>,
    main: () => Home,
  },
];

class Testing extends React.Component {
  render() {

  return (
    <Router>
      <div>
        <nav className="annie-main-menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
}
export default Testing;
