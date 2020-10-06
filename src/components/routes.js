import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Sidebar from "./Sidebar";
import About from "./About";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import FAQ from "./FAQ";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/events" component={Event} />
              <Route path="/faq" component={FAQ} />
              <Route path="/aboutus" component={About} />
              <Route path="/contactus" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;