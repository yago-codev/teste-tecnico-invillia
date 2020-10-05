import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icons } from './assets';

import { AsideContainer, AsideButton, AsideLogo } from './styles';

export const Aside: React.FC = () => {
  return (
    <AsideContainer>
      <AsideLogo>
        <div>
          <img src="https://invillia.com/twitter.png" alt="Logo Invillia" />
        </div>
      </AsideLogo>

      <AsideButton>
        <NavLink exact to="/pokemons">
          {Icons.pokeball}
        </NavLink>
      </AsideButton>

      <AsideButton>
        <NavLink exact to="/types">
          {Icons.fire}
        </NavLink>
      </AsideButton>
    </AsideContainer>
  );
};
