import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }
    
    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }

    & ${SectionContainer} {
      padding-top: ${theme.font.sizes.small};
      padding-bottom: ${theme.font.sizes.small};
    }
  `}
`;
