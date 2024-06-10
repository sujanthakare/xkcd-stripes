import { createGlobalStyle, css } from 'styled-components';
import type { Theme } from './types';

export const cssVariables = css<{ theme?: Theme }>`
  :root {
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-background: ${(props) => props.theme.colors.background};
    --color-gray: ${(props) => props.theme.colors.gray};
    --color-text: ${(props) => props.theme.colors.text};
    --color-text-light: ${(props) => props.theme.colors.textLight};

    --spacing-xs: ${(props) => props.theme.spacing.xs};
    --spacing-sm: ${(props) => props.theme.spacing.sm};
    --spacing-md: ${(props) => props.theme.spacing.md};
    --spacing-lg: ${(props) => props.theme.spacing.lg};
    --spacing-xl: ${(props) => props.theme.spacing.xl};
    --spacing-xxl: ${(props) => props.theme.spacing.xxl};

    --font-family: ${(props) => props.theme.fonts.body};
  }
`;

export const styleReset = css`
body, 
h1, 
h2, 
h3, 
h4, 
h5, 
h6, 
p,
a, 
img,
menu, 
ul, 
li,
article, 
aside, 
footer, 
header,
main, 
nav, 
section,
button {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

html { font-size: ${(props) => props.theme.scale.default}; }


*[hidden] {
    display: none;
}
body {
  line-height: 1;
  font-family: var(--font-family);
}
`;

export const GlobalStyles = createGlobalStyle`
  ${cssVariables} 
  ${styleReset}
`;
