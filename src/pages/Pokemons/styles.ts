import styled from 'styled-components';

export const PokemonsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 20px 10px;
`;

export const PokemonsPaginateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  > ul {
    display: flex;
    list-style: none;
  }
`;
