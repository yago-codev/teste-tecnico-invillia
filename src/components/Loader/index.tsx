import React from 'react';

import { Icons } from 'assets';

import { LoaderContainer } from './styles';

export const Loader: React.FC = () => {
  return <LoaderContainer>{Icons.pokeballLoading}</LoaderContainer>;
};
