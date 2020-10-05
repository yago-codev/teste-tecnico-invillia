import React, { useEffect, useState, useCallback } from 'react';

import {
  IPokemons,
  getAllPokemons,
  getDetailsPokemon,
  IDetailsPokemon,
  IAbility,
  getAbility,
  IForm,
  getForm,
} from 'services/pokeapi';
import { CardPokemons } from 'components/CardPokemons';
import { Pagination } from 'components/Pagination';
import { Loader } from 'components/Loader';

import { PokemonsContainer, PokemonsPaginateContainer } from './styles';

import '../../../node_modules/rc-pagination/assets/index.css';

export const Pokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [detailsPokemon, setDetailsPokemon] = useState<IDetailsPokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemonName, setPokemonName] = useState(undefined);
  const [abilities, setAbilities] = useState<IAbility[]>([]);
  const [forms, setForms] = useState<IForm[]>([]);
  const limit = 20;

  const getDetails = useCallback((arrayPokemons: IPokemons[]) => {
    try {
      setLoading(true);
      setDetailsPokemon([]);
      arrayPokemons.map(async (pokemon) => {
        const details = (await getDetailsPokemon(pokemon.name)).data;
        setDetailsPokemon((prevState) => prevState.concat(details));
        getAbilities(details);
        getForms(details);
      });
      setTimeout(() => setLoading(false), 1300);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { results: pokemon, count: totalPokemons } = (
        await getAllPokemons(pokemonName, offset, limit)
      ).data;
      setPokemons(pokemon);
      calculePagination(totalPokemons);
      getDetails(pokemon);
      setTimeout(() => setLoading(false), 1300);
    } catch (e) {
      console.error(e);
    }
  }, [getDetails, offset, pokemonName]);

  useEffect(() => {
    fetchData();
  }, [fetchData, currentPage]);

  const calculePagination = (totalPokemons: number) => {
    const total = Math.ceil(totalPokemons / limit);
    setTotalPages(total);
  };

  const prevPage = () => {
    if (offset > 0 && currentPage > 1) {
      setOffset(offset - 20);
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setOffset(offset + 20);
      setCurrentPage(currentPage + 1);
    }
  };

  const titlesDetails = [
    {
      name: 'Abilities',
    },
    {
      name: 'Forms',
    },
  ];

  async function getAbilities(arrayDetailsPokemon: IDetailsPokemon) {
    try {
      setAbilities([]);
      arrayDetailsPokemon.abilities.map(async (arrayAbilities) => {
        const dataAbilities = (
          await getAbility(`${arrayAbilities.ability.url}`)
        ).data;
        setAbilities((prevState) => prevState.concat(dataAbilities));
      });
    } catch (e) {
      console.error(e);
    }
  }

  async function getForms(arrayDetailsPokemon: IDetailsPokemon) {
    try {
      setForms([]);
      arrayDetailsPokemon.forms.map(async (arrayForms) => {
        const dataForms = (await getForm(`${arrayForms.url}`)).data;
        setForms((prevState) => prevState.concat(dataForms));
      });
    } catch (e) {
      console.error(e);
    }
  }

  const formTitles = [
    {
      name: 'Battle only',
    },
  ];

  return loading ? (
    <Loader />
  ) : (
    <PokemonsContainer>
      {pokemons.map((pokemon) =>
        detailsPokemon.map((details) =>
          details.forms.map(
            (form) =>
              form.name === pokemon.name && (
                <CardPokemons
                  key={pokemon.id}
                  receiveKey={pokemon.id}
                  id={details.id}
                  name={pokemon.name}
                  types={details.types}
                  titlesDetails={titlesDetails}
                  abilities={details.abilities}
                  abilityInfos={abilities}
                  formTitles={formTitles}
                  formInfos={forms}
                  details={detailsPokemon}
                />
              ),
          ),
        ),
      )}
      <PokemonsPaginateContainer>
        <Pagination
          prevPage={prevPage}
          currentPage={currentPage}
          nextPage={nextPage}
          totalPages={totalPages}
        />
      </PokemonsPaginateContainer>
    </PokemonsContainer>
  );
};
