import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRoute, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Room from "./containers/Room";
import NotFound from "./containers/NotFound";
import Styles from "./app.css";

render(
    <Provider store={store}>
        <BrowserRoute>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/room/:room" component={Room}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRoute>
    </Provider>
)