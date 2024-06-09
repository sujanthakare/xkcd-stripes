import { ThemeProvider } from 'styled-components';
import type { Theme } from './types';
import { defaultTheme } from './default-theme';
import { GlobalStyles } from './styles.globals';

type AppThemeProviderProps = React.PropsWithChildren<{
  theme?: Theme;
}>;

export function AppThemeProvider(props: AppThemeProviderProps) {
  const { children, theme = defaultTheme } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
