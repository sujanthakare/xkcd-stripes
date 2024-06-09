export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
    background: string;
    gray: string;
  };
  fonts: {
    body: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  scale: {
    default: string;
  };
};
