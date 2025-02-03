import styled, { css } from 'styled-components';

export const StyledComponent = styled.a`
  ${({ theme }) => css`
  color: ${theme.colors.primaryColor};
  `};
`;
