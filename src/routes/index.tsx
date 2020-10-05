import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Type } from 'pages/Type';
import { Pokemons } from 'pages/Pokemons';

export const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/pokemons" />
    <Route exact path="/pokemons" component={Pokemons} />
    <Route exact path="/types/:name?" component={Type} />
  </Switch>
);
