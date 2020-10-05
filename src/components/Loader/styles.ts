import styled, { keyframes } from 'styled-components';

const svgAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 4;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  > svg {
    height: 90px;
    z-index: 4;
    animation-name: ${svgAnimation};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
`;
