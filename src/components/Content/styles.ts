import styled from 'styled-components';

export const ContentContainer = styled.div`
  height: calc(100vh - 70px);
  grid-area: CONTENT;
  background-color: ${(props) => props.theme.colors.quaternary};
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const ContentContainerIcon = styled.div`
  position: absolute;
  top: -100px;
  right: -135px;

  > img {
    height: 350px;
  }
`;
