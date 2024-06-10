import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface StyledLinkProps extends React.ComponentProps<typeof Link> {
  disabled?: boolean;
}
export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.6;
        cursor: not-allowed;
        pointer-events: none;
      `;
    }
  }}
`;
