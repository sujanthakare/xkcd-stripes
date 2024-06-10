import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Skeleton } from '../skeleton';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img<{
  $loaded?: boolean;
  $objectFit?: React.CSSProperties['objectFit'];
}>`
  width: 100%;
  height: 100%;
  ${({ $objectFit }) => $objectFit && css`object-fit: ${$objectFit};`}
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
`;

export function LazyImage(
  props: React.ImgHTMLAttributes<HTMLImageElement> & {
    objectFit?: React.CSSProperties['objectFit'];
  },
) {
  const [loaded, setLoaded] = useState(false);
  const { objectFit = 'cover', ...rest } = props;

  return (
    <ImageContainer>
      {!loaded && <Skeleton />}
      <StyledImage
        {...rest}
        $objectFit={objectFit}
        $loaded={loaded}
        onLoad={() => setLoaded(true)}
      />
    </ImageContainer>
  );
}
