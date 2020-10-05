import styled from 'styled-components';

export const HeaderContainer = styled.header`
  grid-area: HEADER;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 20px;
  border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
  z-index: 2;
`;

export const HeaderLeft = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  > img {
    height: 30px;
  }
`;

export const HeaderRight = styled.div`
  div {
    width: 40px;
    height: 40px;

    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
