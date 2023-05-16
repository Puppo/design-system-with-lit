const primary = {
  100: '#007bff',
  200: '#0069d9',
  300: '#005cc5',
  400: '#004da9',
  500: '#003a8c',
  600: '#002d6e',
  700: '#001845',
  800: '#001233',
  900: '#000b1a',
} as const;

const secondary = {
  100: '#6c757d',
  200: '#5a6268',
  300: '#495057',
  400: '#3c4147',
  500: '#32383d',
  600: '#212529',
  700: '#16181a',
  800: '#0b0c0d',
  900: '#000000',
} as const;

const tertiary = {
  100: '#fff',
  200: '#e9ecef',
  300: '#dee2e6',
  400: '#ced4da',
  500: '#adb5bd',
  600: '#6c757d',
  700: '#495057',
  800: '#343a40',
  900: '#212529',
} as const;

const black = '#000000';
const white = '#ffffff';

export const colors = {
  primary,
  secondary,
  tertiary,
  black,
  white,
} as const;
