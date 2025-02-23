import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    width: 100%;

    @media ${theme.media.lteMedium} {
      padding: ${theme.spacings.small};
    }

    @media ${theme.media.lteSmall} {
      padding: ${theme.spacings.xsmall};
    }
  `}
`;
