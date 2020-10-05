import React, { useEffect, useState, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ITypes, getAllTypes } from 'services/pokeapi';

import { CardTypes } from 'components/CardTypes';
import { Loader } from 'components/Loader';

import { TypeContainer } from './styles';

export const Type: React.FC<RouteComponentProps<ITypes>> = ({ match }) => {
  const [types, setTypes] = useState<ITypes[]>([]);
  const [loading, setLoading] = useState(false);
  const { name } = match.params;

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { results } = (await getAllTypes(name)).data;
      setTypes(results);
      setTimeout(() => setLoading(false), 1300);
    } catch (e) {
      console.error(e);
    }
  }, [name]);

  useEffect(() => {
    fetchData();
  }, [fetchData, name]);

  return loading ? (
    <Loader />
  ) : (
    <TypeContainer>
      {types.map((type) => (
        <CardTypes key={type.name} title={type.name} url={type.url} />
      ))}
    </TypeContainer>
  );
};
