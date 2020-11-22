type TTheme = {
  colors: TColors;
};

type TColors = {
  primary: string;
  secondary: string;
  white: string;
};

export const theme = {
  colors: {
    primary: "#215184",
    secondary: "#545454",
    white: "#ffffff",
  },
} as TTheme;
