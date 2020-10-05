import React from 'react';

import invilliaLogo from './assets/invillia-logo.png';

import { HeaderContainer, HeaderLeft, HeaderRight } from './styles';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src={invilliaLogo} alt="Logo Invillia" />
      </HeaderLeft>

      <HeaderRight>
        <div>
          <img
            src="https://avatars0.githubusercontent.com/u/42048838?s=460&u=72fc229cc4165fdae722029565b387e42bb56b81&v=4"
            alt="Avatar de usuário"
          />
        </div>
      </HeaderRight>
    </HeaderContainer>
  );
};
