import React from 'react';

import pokeballIcon from './assets/pokeball.svg';

import { ContentContainer, ContentContainerIcon } from './styles';

export const Content: React.FC = ({ children }) => {
  return (
    <ContentContainer>
      <ContentContainerIcon>
        <img src={pokeballIcon} alt="Ícone pokebola" />
      </ContentContainerIcon>
      {children}
    </ContentContainer>
  );
};
