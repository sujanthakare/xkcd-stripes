import styled, { css } from 'styled-components';

import { Box } from '../box';

export const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: var(--spacing-md);
  box-shadow: 0 var(--spacing-md) var(--spacing-lg) rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: var(--color-text);

  &:hover {
    box-shadow: 0 var(--spacing-md) var(--spacing-lg) rgba(0, 0, 0, 0.2);   
  }
`;

export const CardHeader = styled.div<{ $img?: string }>`
  background-color: var(--color-gray);
  padding: var(--spacing-md);
  font-weight: bold;
  word-wrap: break-word;
  text-overflow: ellipsis;
  padding: var(--spacing-lg);
  
  ${({ $img }) =>
    $img &&
    css`background-image: url(${$img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;

export const CardBody = styled(Box)`
  flex: 1 1 auto;
  position: relative;
  background-color: var(--color-background);
  overflow: hidden;
`;

export const CardFooter = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
`;
