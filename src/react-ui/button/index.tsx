import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--color-primary);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;  
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
