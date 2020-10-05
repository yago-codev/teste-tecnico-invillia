import React, { useState } from 'react';

import { IAbility, IDetailsPokemon, IForm } from 'services/pokeapi';
import { removeWordDash, removeWordUnderline } from 'utils';

import { Icons } from 'assets';

import {
  CardPokemonContainer,
  CardPokemonInfos,
  CardPokemonTitle,
  CardPokemonBadgeType,
  CardPokemonImage,
  CardPokemonSvg,
  CardPokemonDetailsContainer,
  CardPokemonDetailsTitleContainer,
  CardPokemonAbilitiesContainer,
  CardPokemonFormsContainer,
  CardPokemonAbilitiesInfos,
  CardPokemonFormInfos,
} from './styles';

interface ICardPokemons {
  name: string;
  id: number;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  titlesDetails: {
    name: string;
  }[];
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
    },
  ];
  abilityInfos: IAbility[];
  receiveKey: number;
  formTitles: {
    name: string;
  }[];
  formInfos: IForm[];
  details: IDetailsPokemon[];
}

export const CardPokemons: React.FC<ICardPokemons> = ({
  name,
  types,
  id,
  titlesDetails,
  abilities,
  abilityInfos,
  receiveKey,
  formTitles,
  formInfos,
  details,
}) => {
  const [activeFirstTitleDetails, setActiveFirstTitleDetails] = useState(true);
  const [activeSecondTitleDetails, setActiveSecondTitleDetails] = useState(
    false,
  );

  const handleActiveFirstTitleDetails = () => {
    setActiveFirstTitleDetails(true);
    setActiveSecondTitleDetails(false);
  };

  const handleActiveSecondTitleDetails = () => {
    setActiveSecondTitleDetails(true);
    setActiveFirstTitleDetails(false);
  };

  return (
    <CardPokemonContainer
      color={types.map((arrayTypes) => arrayTypes.type.name)}
    >
      <CardPokemonInfos>
        <CardPokemonTitle>
          <h2>{name}</h2>
        </CardPokemonTitle>
        {types.map((ArrayTypes) => (
          <CardPokemonBadgeType
            key={receiveKey}
            color={types.map((arrayTypes) => arrayTypes.type.name)}
          >
            {ArrayTypes.type.name}
          </CardPokemonBadgeType>
        ))}
      </CardPokemonInfos>
      <CardPokemonImage>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={`Imagem ${name}`}
        />
      </CardPokemonImage>
      <CardPokemonSvg color={types.map((arrayTypes) => arrayTypes.type.name)}>
        {Icons.pokeball}
      </CardPokemonSvg>
      <CardPokemonDetailsContainer
        className="CardPokemonAbilitiesContainer"
        color={types.map((arrayTypes) => arrayTypes.type.name)}
      >
        <CardPokemonDetailsTitleContainer>
          <h3
            onClick={() => handleActiveFirstTitleDetails()}
            className={activeFirstTitleDetails ? `active` : ``}
          >
            {titlesDetails[0].name}
          </h3>
          <h3
            onClick={() => handleActiveSecondTitleDetails()}
            className={activeSecondTitleDetails ? `active` : ``}
          >
            {titlesDetails[1].name}
          </h3>
        </CardPokemonDetailsTitleContainer>
        {activeFirstTitleDetails && (
          <CardPokemonAbilitiesContainer>
            {abilities.map((arrayAbility) => (
              <CardPokemonAbilitiesInfos key={receiveKey}>
                <strong>{removeWordDash(arrayAbility.ability.name)}</strong>
                {abilityInfos.map(
                  (arrayAbilities) =>
                    arrayAbilities.name === arrayAbility.ability.name &&
                    arrayAbilities.effect_entries
                      .filter((effect) => effect.language.name === 'en')
                      .map((effect) => (
                        <p key={receiveKey} className="abilityDescription">
                          {effect.short_effect}
                        </p>
                      )),
                )}
              </CardPokemonAbilitiesInfos>
            ))}
          </CardPokemonAbilitiesContainer>
        )}
        {activeSecondTitleDetails && (
          <CardPokemonFormsContainer>
            {formTitles.map((title) => (
              <CardPokemonFormInfos key={title.name}>
                <strong>{title.name}</strong>
                {details.map((detail) =>
                  formInfos.map(
                    (infos) =>
                      detail.id === infos.id && (
                        <p className="formDescription">
                          {infos.is_battle_only ? `Yes` : `No`}
                        </p>
                      ),
                  ),
                )}
              </CardPokemonFormInfos>
            ))}
          </CardPokemonFormsContainer>
        )}
      </CardPokemonDetailsContainer>
    </CardPokemonContainer>
  );
};
