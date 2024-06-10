import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
