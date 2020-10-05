import styled from 'styled-components';

export const AsideContainer = styled.aside`
  grid-area: ASIDE;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
`;

export const AsideLogo = styled.button`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  margin-bottom: 15px;
  cursor: default;

  > div {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.blackSecondary};
    border-radius: 6px;

    img {
      height: 30px;
    }
  }
`;

export const AsideButton = styled.button`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.blackTertiary};
  margin-bottom: 15px;
  border-radius: 6px;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};

    a {
      > svg {
        opacity: 0.9;
      }
    }
  }

  a {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    &.active {
      background-color: ${(props) => props.theme.colors.primary};
    }

    > svg {
      height: 25px;
      fill: ${(props) => props.theme.colors.quaternary};
    }
  }
`;
