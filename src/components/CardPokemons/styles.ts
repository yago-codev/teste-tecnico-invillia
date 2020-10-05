import styled from 'styled-components';
import { shade } from 'polished';

interface ICardPokemonContainer {
  color: any;
}

export const CardPokemonContainer = styled.div<ICardPokemonContainer>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 180px;
  width: calc(25% - 10px);
  border-radius: 20px;
  background-color: ${(props) => {
    switch (props.color[0]) {
      case 'fire':
        return props.theme.colors.redPrimary;

      case 'water':
        return props.theme.colors.bluePrimary;

      case 'grass':
        return props.theme.colors.greenPrimary;

      case 'electric':
        return props.theme.colors.yellowPrimary;

      case 'psychic':
        return props.theme.colors.purplePrimary;

      case 'shadow':
        return props.theme.colors.blackQuaternary;

      case 'rock':
        return props.theme.colors.grayPrimary;

      case 'ice':
        return props.theme.colors.icePrimary;

      case 'normal':
        return props.theme.colors.beigePrimary;

      case 'flying':
        return props.theme.colors.cyanPrimary;

      case 'fighting':
        return props.theme.colors.brownPrimary;

      case 'ground':
        return props.theme.colors.groundPrimary;

      case 'poison':
        return props.theme.colors.purpleTertiary;

      case 'bug':
        return props.theme.colors.greenTertiary;

      case 'ghost':
        return props.theme.colors.grayTertiary;

      case 'steel':
        return props.theme.colors.steelPrimary;

      case 'dragon':
        return props.theme.colors.dragonPrimary;

      case 'dark':
        return props.theme.colors.darkPrimary;

      case 'fairy':
        return props.theme.colors.pinkPrimary;

      case 'unknown':
        return props.theme.colors.orangePrimary;

      default:
        return undefined;
    }
  }};
  position: relative;
  box-shadow: ${(props) => {
    switch (props.color[0]) {
      case 'fire':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.redPrimary)}`;

      case 'water':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.bluePrimary)}`;

      case 'grass':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.greenPrimary)}`;

      case 'electric':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.yellowPrimary)}`;

      case 'psychic':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.purplePrimary)}`;

      case 'shadow':
        return `0 10px 10px 0 ${shade(
          0.2,
          props.theme.colors.blackQuaternary,
        )}`;

      case 'rock':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.grayPrimary)}`;

      case 'ice':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.icePrimary)}`;

      case 'normal':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.beigePrimary)}`;

      case 'flying':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.cyanPrimary)}`;

      case 'fighting':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.brownPrimary)}`;

      case 'ground':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.groundPrimary)}`;

      case 'poison':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.purpleTertiary)}`;

      case 'bug':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.greenTertiary)}`;

      case 'ghost':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.grayTertiary)}`;

      case 'steel':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.steelPrimary)}`;

      case 'dragon':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.dragonPrimary)}`;

      case 'dark':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.darkPrimary)}`;

      case 'fairy':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.pinkPrimary)}`;

      case 'unknown':
        return `0 10px 10px 0 ${shade(0.2, props.theme.colors.orangePrimary)}`;

      default:
        return undefined;
    }
  }};
  margin-left: 10px;
  margin-bottom: 20px;
  padding: 20px 10px 20px 20px;
  position: relative;
  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    box-shadow: 0 10px 10px 0 ${(props) => props.theme.colors.tertiary};
    margin-bottom: 360px;

    .CardPokemonAbilitiesContainer {
      visibility: visible;
    }
  }
`;

export const CardPokemonInfos = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export const CardPokemonTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 5px;

  > h2 {
    font-size: 20px;
  }
`;

export const CardPokemonBadgeType = styled.span<ICardPokemonContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => {
    switch (props.color[0]) {
      case 'fire':
        return props.theme.colors.redSecondary;

      case 'water':
        return props.theme.colors.blueSecondary;

      case 'grass':
        return props.theme.colors.greenSecondary;

      case 'electric':
        return props.theme.colors.yellowSecondary;

      case 'psychic':
        return props.theme.colors.purpleSecondary;

      case 'shadow':
        return props.theme.colors.blackQuinary;

      case 'rock':
        return props.theme.colors.graySecondary;

      case 'ice':
        return props.theme.colors.iceSecondary;

      case 'normal':
        return props.theme.colors.beigeSecondary;

      case 'flying':
        return props.theme.colors.cyanSecondary;

      case 'fighting':
        return props.theme.colors.brownSecondary;

      case 'ground':
        return props.theme.colors.groundSecondary;

      case 'poison':
        return props.theme.colors.purpleQuaternary;

      case 'bug':
        return props.theme.colors.greenQuaternary;

      case 'ghost':
        return props.theme.colors.grayQuaternary;

      case 'steel':
        return props.theme.colors.steelSecondary;

      case 'dragon':
        return props.theme.colors.dragonSecondary;

      case 'dark':
        return props.theme.colors.darkSecondary;

      case 'fairy':
        return props.theme.colors.pinkSecondary;

      case 'unknown':
        return props.theme.colors.orangeSecondary;

      default:
        return undefined;
    }
  }};
  border-radius: 10px;
  text-transform: capitalize;
  padding: 2px 0;

  & + & {
    margin-top: 5px;
  }
`;

export const CardPokemonImage = styled.div`
  margin-right: 25px;
  z-index: 2;

  > img {
    height: 90px;
  }
`;

export const CardPokemonSvg = styled.div<ICardPokemonContainer>`
  position: absolute;
  right: 0;

  > svg {
    height: 160px;
    width: 160px;
    fill: ${(props) => {
      switch (props.color[0]) {
        case 'fire':
          return props.theme.colors.redSecondary;

        case 'water':
          return props.theme.colors.blueSecondary;

        case 'grass':
          return props.theme.colors.greenSecondary;

        case 'electric':
          return props.theme.colors.yellowSecondary;

        case 'psychic':
          return props.theme.colors.purpleSecondary;

        case 'shadow':
          return props.theme.colors.blackQuinary;

        case 'rock':
          return props.theme.colors.graySecondary;

        case 'ice':
          return props.theme.colors.iceSecondary;

        case 'normal':
          return props.theme.colors.beigeSecondary;

        case 'flying':
          return props.theme.colors.cyanSecondary;

        case 'fighting':
          return props.theme.colors.brownSecondary;

        case 'ground':
          return props.theme.colors.groundSecondary;

        case 'poison':
          return props.theme.colors.purpleQuaternary;

        case 'bug':
          return props.theme.colors.greenQuaternary;

        case 'ghost':
          return props.theme.colors.grayQuaternary;

        case 'steel':
          return props.theme.colors.steelSecondary;

        case 'dragon':
          return props.theme.colors.dragonSecondary;

        case 'dark':
          return props.theme.colors.darkSecondary;

        case 'fairy':
          return props.theme.colors.pinkSecondary;

        case 'unknown':
          return props.theme.colors.orangeSecondary;

        default:
          return undefined;
      }
    }};
  }
`;

export const CardPokemonDetailsContainer = styled.div<ICardPokemonContainer>`
  position: absolute;
  top: 165px;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
  border-radius: 20px;
  visibility: hidden;
  transition: 0.2s;
  box-shadow: 0 10px 10px 0 ${(props) => props.theme.colors.tertiary};

  h3 {
    font-size: 16px;
    font-weight: bold;

    &:first-child {
      margin-right: 15px;
    }

    &.active {
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${(props) => {
          switch (props.color[0]) {
            case 'fire':
              return props.theme.colors.redSecondary;

            case 'water':
              return props.theme.colors.blueSecondary;

            case 'grass':
              return props.theme.colors.greenSecondary;

            case 'electric':
              return props.theme.colors.yellowSecondary;

            case 'psychic':
              return props.theme.colors.purpleSecondary;

            case 'shadow':
              return props.theme.colors.blackQuinary;

            case 'rock':
              return props.theme.colors.graySecondary;

            case 'ice':
              return props.theme.colors.iceSecondary;

            case 'normal':
              return props.theme.colors.beigeSecondary;

            case 'flying':
              return props.theme.colors.cyanSecondary;

            case 'fighting':
              return props.theme.colors.brownSecondary;

            case 'ground':
              return props.theme.colors.groundSecondary;

            case 'poison':
              return props.theme.colors.purpleQuaternary;

            case 'bug':
              return props.theme.colors.greenQuaternary;

            case 'ghost':
              return props.theme.colors.grayQuaternary;

            case 'steel':
              return props.theme.colors.steelSecondary;

            case 'dragon':
              return props.theme.colors.dragonSecondary;

            case 'dark':
              return props.theme.colors.darkSecondary;

            case 'fairy':
              return props.theme.colors.pinkSecondary;

            case 'unknown':
              return props.theme.colors.orangeSecondary;

            default:
              return undefined;
          }
        }};
        position: relative;
        top: 12px;
      }
    }
  }
`;

export const CardPokemonDetailsTitleContainer = styled.div`
  display: flex;
`;

export const CardPokemonAbilitiesContainer = styled.div`
  margin-top: 10px;
  padding-top: 15px;
  border-top: 2px solid ${(props) => props.theme.colors.quaternary};
`;

export const CardPokemonAbilitiesInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  strong {
    text-transform: capitalize;
  }

  .abilityDescription {
    color: ${(props) => props.theme.colors.tertiary};

    &:nth-child(2) {
      display: block;
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      display: none;
    }
  }
`;

export const CardPokemonFormsContainer = styled.div`
  margin-top: 10px;
  padding-top: 15px;
  border-top: 2px solid ${(props) => props.theme.colors.quaternary};
`;

export const CardPokemonFormInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  strong {
    text-transform: capitalize;
  }

  .formDescription {
    color: ${(props) => props.theme.colors.tertiary};

    &:nth-child(2) {
      display: block;
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(11),
    &:nth-child(12),
    &:nth-child(13),
    &:nth-child(14),
    &:nth-child(15),
    &:nth-child(16),
    &:nth-child(17),
    &:nth-child(18),
    &:nth-child(19),
    &:nth-child(20),
    &:nth-child(21) {
      display: none;
    }
  }
`;
