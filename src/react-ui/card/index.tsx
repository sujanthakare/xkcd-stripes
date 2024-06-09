import type React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import { Box } from '../box';
import { Skeleton } from '../skeleton';

export const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: var(--spacing-md);
  box-shadow: 0 var(--spacing-md) var(--spacing-lg) rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CardHeader = styled.div<{ $img?: string }>`
  background-color: var(--color-gray);
  padding: var(--spacing-md);
  font-weight: bold;
  word-wrap: break-word;
  text-overflow: ellipsis;
  
  ${({ $img }) =>
    $img &&
    css`background-image: url(${$img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;

export const CardBody = styled.div<{ img?: string }>`
  flex: 1;
  background-color: var(--color-background);
  overflow: hidden;
`;

export const CardFooter = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  padding: var(--spacing-md);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img<{ loaded?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
`;

export function CardImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageContainer>
      {!loaded && <Skeleton />}
      <StyledImage {...props} loaded={loaded} onLoad={() => setLoaded(true)} />
    </ImageContainer>
  );
}
