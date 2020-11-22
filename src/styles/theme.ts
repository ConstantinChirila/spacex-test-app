type TTheme = {
  colors: TColors;
  fontFamily: string;
};

type TColors = {
  primary: string;
  secondary: string;
  text: string;
  white: string;
};

export const theme = {
  colors: {
    primary: "#215184",
    secondary: "#ED5E53",
    text: "#545454",
    white: "#ffffff",
  },
  fontFamily: "Brandon Grotesque, Arial, Helvetica, sans-serif",
} as TTheme;
