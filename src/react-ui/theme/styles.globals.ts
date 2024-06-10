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
body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video , button {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

html { font-size: ${(props) => props.theme.scale.default}; }

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  font-family: var(--font-family);
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

export const GlobalStyles = createGlobalStyle`
  ${cssVariables} 
  ${styleReset}
`;
