import styled from 'styled-components';
import { shade } from 'polished';

interface ICardContainer {
  color: string;
}

export const CardContainer = styled.div<ICardContainer>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: calc(25% - 10px);
  border-radius: 20px;
  background-color: ${(props) => {
    switch (props.color) {
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
    switch (props.color) {
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
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
  }
`;

export const CardIconContainer = styled.div<ICardContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 70px;
    width: 70px;
    fill: ${(props) => {
      switch (props.color) {
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

export const CardTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  text-transform: capitalize;
`;
