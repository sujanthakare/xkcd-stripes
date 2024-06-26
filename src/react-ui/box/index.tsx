import type React from 'react';
import styled, { css } from 'styled-components';
import type { Theme } from '../theme/types';

interface StyledBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  $flex?: number | string;
  $display?: React.CSSProperties['display'];
  $flexDirection?: React.CSSProperties['flexDirection'];
  $justifyContent?: React.CSSProperties['justifyContent'];
  $alignItems?: React.CSSProperties['alignItems'];
  $flexWrap?: React.CSSProperties['flexWrap'];
  $flexGrow?: React.CSSProperties['flexGrow'];
  $flexShrink?: React.CSSProperties['flexShrink'];
  $flexBasis?: React.CSSProperties['flexBasis'];
  $alignSelf?: React.CSSProperties['alignSelf'];
  $gap?: keyof Theme['spacing'];
  $padding?: keyof Theme['spacing'];
  $margin?: keyof Theme['spacing'];
  $backgroundColor?: React.CSSProperties['backgroundColor'];
  $width?: React.CSSProperties['width'];
  $height?: React.CSSProperties['height'];
  $maxWidth?: React.CSSProperties['maxWidth'];
  $maxHeight?: React.CSSProperties['maxHeight'];
  $minHeight?: React.CSSProperties['minHeight'];
  $minWidth?: React.CSSProperties['minWidth'];
  $overflow?: React.CSSProperties['overflow'];
  $position?: React.CSSProperties['position'];
  $bottom?: React.CSSProperties['bottom'];
  $top?: React.CSSProperties['top'];
}

const StyledBox = styled.div<StyledBoxProps>`
  ${({ $flex }) => $flex && css`flex: ${$flex};`}
  ${({ $display }) => $display && css`display: ${$display};`}
  ${({ $justifyContent }) => $justifyContent && css`justify-content: ${$justifyContent};`}
  ${({ $alignItems }) => $alignItems && css`align-items: ${$alignItems};`}
  ${({ $flexWrap }) => $flexWrap && css`flex-wrap: ${$flexWrap};`}
  ${({ $flexGrow }) => $flexGrow && css`flex-grow: ${$flexGrow};`}
  ${({ $flexShrink }) => $flexShrink && css`flex-shrink: ${$flexShrink};`}
  ${({ $flexBasis }) => $flexBasis && css`flex-basis: ${$flexBasis};`}
  ${({ $alignSelf }) => $alignSelf && css`align-self: ${$alignSelf};`}
  ${({ $gap }) => $gap && css`gap: var(--spacing-${$gap});`}
  ${({ $padding }) => $padding && css`padding: var(--spacing-${$padding});`}
  ${({ $margin }) => $margin && css`margin: var(--spacing-${$margin});`}
  ${({ $width }) => $width && css`width: ${$width};`}
  ${({ $height }) => $height && css`height: ${$height};`}
  ${({ $flexDirection }) => $flexDirection && css`flex-direction: ${$flexDirection};`}
  ${({ $backgroundColor }) => $backgroundColor && css`background-color: ${$backgroundColor};`}
  ${({ $maxWidth }) => $maxWidth && css`max-width: ${$maxWidth};`}
  ${({ $maxHeight }) => $maxHeight && css`max-height: ${$maxHeight};`}
  ${({ $overflow }) => $overflow && css`overflow: ${$overflow};`}
  ${({ $position }) => $position && css`position: ${$position};`}
  ${({ $bottom }) => $bottom && css`bottom: ${$bottom};`}
  ${({ $top }) => $top && css`top: ${$top};`}
  ${({ $minHeight }) => $minHeight && css`min-height: ${$minHeight};`}
  ${({ $minWidth }) => $minWidth && css`min-width: ${$minWidth};`}
`;

type BoxProps = {
  [K in keyof StyledBoxProps as K extends `$${infer R}`
    ? R
    : K]: StyledBoxProps[K];
};

export function Box({
  children,
  className,
  as,
  ...rest
}: React.PropsWithChildren<
  BoxProps & { className?: string; as?: React.ElementType }
>) {
  const transientProps: Record<string, unknown> = {};

  for (const key in rest) {
    transientProps[`$${key}`] = rest[key as keyof BoxProps];
  }

  return (
    <StyledBox {...transientProps} className={className} as={as}>
      {children}
    </StyledBox>
  );
}
