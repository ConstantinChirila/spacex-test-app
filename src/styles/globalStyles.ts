import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Brandon Grotesque';
  src: url('./../assets/font/BrandonGrotesque-Bold.woff2') format('woff2'),
      url('./../assets/font/BrandonGrotesque-Bold.woff') format('woff'),
      url('./../assets/font/BrandonGrotesque-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Brandon Grotesque';
  src: url('./../assets/font/BrandonGrotesque-Regular.woff2') format('woff2'),
      url('./../assets/font/BrandonGrotesque-Regular.woff') format('woff'),
      url('./../assets/font/BrandonGrotesque-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Brandon Grotesque';
  src: url('./../assets/font/BrandonGrotesque-RegularItalic.woff2') format('woff2'),
      url('./../assets/font/BrandonGrotesque-RegularItalic.woff') format('woff'),
      url('./../assets/font/BrandonGrotesque-RegularItalic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Brandon Grotesque';
  src: url('./../assets/font/BrandonGrotesque-Black.woff2') format('woff2'),
      url('./../assets/font/BrandonGrotesque-Black.woff') format('woff'),
      url('./../assets/font/BrandonGrotesque-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Brandon Grotesque';
  src: url('./../assets/font/BrandonGrotesque-Medium.woff2') format('woff2'),
      url('./../assets/font/BrandonGrotesque-Medium.woff') format('woff'),
      url('./../assets/font/BrandonGrotesque-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

  html {
    font-size: 10px;
  }
  
  body {
    font-family: 'Brandon Grotesque', Arial, Helvetica, sans-serif;
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.white};
    font-size: 1.6rem
  }
`;
