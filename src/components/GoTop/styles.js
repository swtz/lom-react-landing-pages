import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    z-index: 6;
  `}
`;
