/* eslint-disable max-len */
export const colors = {
  brand: "#663399",
  lilac: "#9d7cbf",
  accent: "#ffb238",
  success: "#37b635",
  warning: "#ec1818",
  lighterGrayWarm: "#fdfdfa",
  lightGrayWarm: "#fafaf0",
  slateBlue: "#335fc6",
  slateGreen: "#00be78",
  ui: {
    bright: "#e0d6eb",
    light: "#f5f3f7",
    whisper: "#fbfafc",
  },
  code: "#fcf6f0",
  gray: {
    dark: "hsla(270, 17.119554496%, 0%, 0.92)",
    copy: "hsla(270, 15.797828016000002%, 0%, 0.88)",
    calm: "rgba(0, 0, 0, 0.54)",
    veryLight: "rgba(0, 0, 0, 0.1)",
  },
  white: "#fff",
  black: "#000",
  orange: {
    bright: "#f15d00",
    light: "#ffd7bf",
    medium: "#ffa773",
  },
  blue: {
    soft: "#0094f1",
    light: "#bfe7ff",
  },
  red: {
    bright: "#df0000",
    medium: "#b80000",
    mediumDark: "#900000",
    dark: "#450000",
  },
};

export interface ThemeColors {
  background1: string;
  background2: string;
  headerBackground1: string;
  headerBackground2: string;
  headerText: string;
  navBarText: string;
  navBarHover: string;
  navBarItem: string;
  navBarSubItem: string;
  activeItem: string;
  regularText: string;
  dates: string;
  shadow: string;
  button: string;
  buttonHover: string;
  buttonText: string;
  buttonSecondary: string;
  buttonSecondaryHover: string;
  buttonSecondaryText: string;
  code: string;
}

export const themeLight: ThemeColors = {
  background1: colors.white,
  background2: colors.lightGrayWarm,
  headerBackground1: colors.slateBlue,
  headerBackground2: colors.slateGreen,
  headerText: colors.black,
  navBarText: colors.gray.dark,
  navBarHover: colors.orange.medium,
  navBarItem: colors.orange.light,
  navBarSubItem: colors.gray.calm,
  activeItem: colors.red.medium,
  regularText: colors.black,
  dates: colors.gray.calm,
  shadow: colors.gray.veryLight,
  button: colors.red.medium,
  buttonHover: colors.red.bright,
  buttonText: colors.lightGrayWarm,
  buttonSecondary: colors.red.dark,
  buttonSecondaryHover: colors.red.bright,
  buttonSecondaryText: colors.lightGrayWarm,
  code: colors.code,
};

export const fonts = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace',
};

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 724,
  lg: 992,
  xl: 1200,
};

export const widths = {
  md: 720,
  lg: 960,
  xl: 1140,
};

export const dimensions = {
  fontSize: {
    xsmall: 12,
    small: 14,
    regular: 16,
    large: 18,
    xlarge: 20,
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25,
    huge1: 5,
    huge2: 4,
    huge3: 3,
  },
  lineHeight: {
    regular: 1.45,
    heading: 1.2,
  },
  containerPadding: 1.5,
};

export const heights = {
  header: 80,
};
