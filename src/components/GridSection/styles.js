import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
  counter-reset: grid-counter;
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
  ${HeadingContainer} {
    position: relative;
    left: 5rem;
  }

  ${HeadingContainer}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -3rem;
    left: -5rem;
    transform: rotate(15deg);
  }
  `}
`;
