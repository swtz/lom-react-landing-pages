import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
  display: block;
  text-decoration: none;
  font-size: ${theme.font.sizes.small};
  `};
`;
