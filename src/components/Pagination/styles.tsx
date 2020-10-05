import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
`;

export const PaginationPrevPageButton = styled.button`
  height: 39px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 6px;
  box-shadow: 0 5px 5px 0 ${(props) => props.theme.colors.tertiary};
  transition: 0.2s;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.blackSecondary};
    box-shadow: 0 5px 5px 0 ${(props) => props.theme.colors.tertiary};

    > svg {
      > polyline {
        stroke: ${(props) => props.theme.colors.blackSecondary};
      }
    }
  }

  &:disabled {
    cursor: no-drop;
    border: 2px solid ${(props) => props.theme.colors.tertiary};
    box-shadow: 0 5px 5px 0 ${(props) => props.theme.colors.tertiary};

    > svg {
      > polyline {
        stroke: ${(props) => props.theme.colors.tertiary};
      }
    }
  }

  > svg {
    font-size: 22px;

    > polyline {
      stroke: ${(props) => props.theme.colors.tertiary};
    }
  }
`;

export const PaginationCurrentPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  width: 35px;
  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 6px;
  margin: 0 10px;
  box-shadow: 0 5px 5px 0 ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: bold;
  cursor: default;
`;

export const PaginationNextPageButton = styled.button`
  height: 39px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 6px;
  box-shadow: 0 5px 5px 0 ${(props) => props.theme.colors.tertiary};
  transition: 0.2s;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.blackSecondary};
    box-shadow: 0 5px 5px 0 ${(props) => props.theme.colors.tertiary};

    > svg {
      > polyline {
        stroke: ${(props) => props.theme.colors.blackSecondary};
      }
    }
  }

  &:disabled {
    cursor: no-drop;
    border: 2px solid ${(props) => props.theme.colors.tertiary};
    box-shadow: 0 5px 5px 0 ${(props) => props.theme.colors.tertiary};

    > svg {
      > polyline {
        stroke: ${(props) => props.theme.colors.tertiary};
      }
    }
  }

  > svg {
    font-size: 22px;
    > polyline {
      stroke: ${(props) => props.theme.colors.tertiary};
    }
  }
`;
