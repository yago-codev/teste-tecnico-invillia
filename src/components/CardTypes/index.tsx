import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icons } from 'assets';

import { CardContainer, CardTitle, CardIconContainer } from './styles';

export interface ICard {
  title: string;
  url: string;
}

export const CardTypes: React.FC<ICard> = ({ title }) => {
  return (
    <CardContainer color={title}>
      <NavLink to={`/type/${title}`}>
        <CardTitle>{title}</CardTitle>
        <CardIconContainer color={title}>{Icons.pokeball}</CardIconContainer>
      </NavLink>
    </CardContainer>
  );
};
