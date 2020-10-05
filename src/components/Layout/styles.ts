import styled from 'styled-components';

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    'ASIDE HEADER'
    'ASIDE CONTENT';
  position: relative;
`;
