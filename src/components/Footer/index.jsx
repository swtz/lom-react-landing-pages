import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';

export const Footer = ({ children }) => {
  return (
    <Styled.Container>
      <TextComponent>{children}</TextComponent>
    </Styled.Container>
  );
};

Footer.propTypes = {
  children: P.node.isRequired,
};
