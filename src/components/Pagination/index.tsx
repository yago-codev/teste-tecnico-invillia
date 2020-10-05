import React from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import {
  PaginationContainer,
  PaginationPrevPageButton,
  PaginationCurrentPage,
  PaginationNextPageButton,
} from './styles';

interface IPagination {
  prevPage: () => void;
  currentPage: number;
  nextPage: () => void;
  totalPages: number;
}

export const Pagination: React.FC<IPagination> = ({
  prevPage,
  currentPage,
  nextPage,
  totalPages,
}) => {
  return (
    <PaginationContainer>
      <PaginationPrevPageButton disabled={currentPage === 1} onClick={prevPage}>
        <GrFormPrevious />
      </PaginationPrevPageButton>
      <PaginationCurrentPage>{currentPage}</PaginationCurrentPage>
      <PaginationNextPageButton
        disabled={currentPage === totalPages}
        onClick={nextPage}
      >
        <GrFormNext />
      </PaginationNextPageButton>
    </PaginationContainer>
  );
};
