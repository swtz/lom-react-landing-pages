import P from 'prop-types';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = ({ children }) => {
  return (
    <Styled.Container href="#">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};

GoTop.propTypes = {
  children: P.node.isRequired,
};
