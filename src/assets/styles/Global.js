import { createGlobalStyle } from "styled-components";
import YSDisplayBold from '../fonts/YS_Display-Bold.ttf';
import YSDisplayMedium from '../fonts/YS_Display-Medium.ttf';
import YSDisplayRegular from '../fonts/YS_Display-Regular.ttf';
import YSDisplayLight from '../fonts/YS_Display-Light.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'YS Display';
    font-style:  normal;
    font-weight: 300;
    font-display: swap;
    src: url(${YSDisplayLight}) format("ttf");
  }

  @font-face {
    font-family: 'YS Display';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url(${YSDisplayRegular}) format("ttf");
  }

  @font-face {
    font-family: 'YS Display';
    font-style:  normal;
    font-weight: 500;
    font-display: swap;
    src: url(${YSDisplayMedium}) format("ttf");
  }

  @font-face {
    font-family: 'YS Display';
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url(${YSDisplayBold}) format("ttf");
  }

  margin: 0;
  padding: 0;
  font-family: 'YS Display', Arial, sans-serif;
  background-color: ${({ theme }) => theme.colors.main.white};
  box-sizing: border-box;
  position: relative;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  font-smooth: never;

  html {
    scroll-behavior: smooth;
  }
`

export default GlobalStyles;