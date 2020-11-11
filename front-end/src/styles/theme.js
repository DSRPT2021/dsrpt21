import baseStyled from '@emotion/styled';
import { css } from '@emotion/core';

const fonts = {
  main: `"Nunito Sans", sans-serif`,
  code: `"Fira Code", monospace;`,
};

const colors = {
  colorBackground: {
    100: '#F0F4F5',
  },

  primary: {
    100: '#7693AB',
    200: '#647D91',
    300: '#536778',
    400: '#41515E',
    500: '#303C46',
  },

  neutral: {
    0: '#FFFFFF',
    100: '#F7FAFC',
    200: '#EDF2F7',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C',
  },

  blue: {
    100: '#EBF8FF',
    200: '#BEE3F8',
    300: '#90CDF4',
    400: '#63B3ED',
    500: '#4299E1',
    600: '#3182CE',
    700: '#2B6CB0',
    800: '#2C5282',
    900: '#2A4365',
  },

  red: {
    100: '#FFF5F5',
    200: '#FED7D7',
    300: '#FEB2B2',
    400: '#FC8181',
    500: '#F56565',
    600: '#E53E3E',
    700: '#C53030',
    800: '#9B2C2C',
    900: '#742A2A',
  },

  yellow: {
    100: '#FFFFF0',
    200: '#FEFCBF',
    300: '#FAF089',
    400: '#F6E05E',
    500: '#ECC94B',
    600: '#D69E2E',
    700: '#B7791F',
    800: '#975A16',
    900: '#744210',
  },

  green: {
    100: '#F0FFF4',
    200: '#C6F6D5',
    300: '#9AE6B4',
    400: '#68D391',
    500: '#48BB78',
    600: '#38A169',
    700: '#2F855A',
    800: '#276749',
    900: '#22543D',
  },

  orange: {
    100: '#FFFAF0',
    200: '#FEEBC8',
    300: '#FBD38D',
    400: '#F6AD55',
    500: '#ED8936',
    600: '#DD6B20',
    700: '#C05621',
    800: '#9C4221',
    900: '#7B341E',
  },

  purple: {
    100: '#FAF5FF',
    200: '#E9D8FD',
    300: '#D6BCFA',
    400: '#B794F4',
    500: '#9F7AEA',
    600: '#805AD5',
    700: '#6B46C1',
    800: '#553C9A',
    900: '#44337A',
  },

  white: {
    100: '#FFFFFF',
    200: '#FFFFFF',
    500: '#FFFFFF',
  },
};

const spacer = 16;

const spacing = {
  none: 0,
  auto: 'auto',
  xxs: `${spacer * 0.25}px`, // 4
  xs: `${spacer * 0.5}px`, // 8
  sm: `${spacer * 0.75}px`, // 12
  md: `${spacer * 1}px`, // 16
  lg: `${spacer * 1.5}px`, // 24
  xg: `${spacer * 2}px`, // 32
  xxg: `${spacer * 2.5}px`, // 40
  xxxg: `${spacer * 3}px`, // 48
  hg: `${spacer * 4}px`, // 64,
  xhg: `${spacer * 4.5}px`, // 72,
  xxhg: `${spacer * 5}px`, // 80,
  xxxhg: `${spacer * 6}px`, // 96,
};

const radius = '4px';

export const theme = {
  fonts,
  colors,
  spacing,
  radius,
};

export const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');
  body {
    background-color: ${colors.colorBackground[100]};
    min-height: 100vh;
    font-family: ${fonts.main};
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    .ReactModal__Content {
      overflow: auto !important;
    }
  }
  .ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  ::placeholder {
    color: ${colors.primary['100']};
    font-weight: 400;
    opacity: 1;
  }

  ::selection {
    background: ${colors.blue[200]};
  }

  ::moz-selection {
    background: ${colors.blue[200]};
  }

  /* Clear chrome's blue background on autofilled inputs */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: unset;
    -webkit-text-fill-color: unset;
    box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const styled = baseStyled;
