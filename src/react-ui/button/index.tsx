import styled from 'styled-components';
import type { Theme } from '../theme/types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof Theme['colors'];
}

export const Button = styled.button<ButtonProps>`
  background-color: var(--color-primary);
  background-color: ${({ color = 'primary' }) => color && `var(--color-${color})`};
  border: none;
  color: var(--color-text-light);
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;  
  cursor: pointer;

  &:hover {
    opacity: 0.8; 
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  transition: opacity 0.3s ease;    
`;
