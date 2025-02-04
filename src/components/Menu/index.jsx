import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export const Menu = ({ children }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <h1>{children}</h1>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
};
