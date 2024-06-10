import type { Theme } from './types';

export const defaultTheme: Theme = {
  colors: {
    primary: '#007FFF',
    secondary: '#FF8000',
    background: '#FFFFFF',
    gray: '#E0E0E0',
    text: '#000000',
    textLight: '#FFFFFF',
  },
  fonts: {
    body: 'Comic Neue',
  },
  spacing: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    xxl: '1.5rem',
  },
  scale: {
    default: '16px',
  },
};
