import React from "react";
import { Route, Switch, Redirect } from "wouter";
import { About, Home, EventPage } from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />

    {/* event idがないときはindexへ飛ばす */}
    <Route path="/event">
      <Redirect to="/" />
    </Route>
    <Route path="/event/:id">
      {params => <EventPage eventId={params.id} />}
    </Route>
  </Switch>
);

export default Router;
