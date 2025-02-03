import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children }) => {
  return <Styled.StyledComponent>{children}</Styled.StyledComponent>;
};

MenuLink.propTypes = {
  children: P.node.isRequired,
};
