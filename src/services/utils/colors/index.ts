import { IColors, ICustomTheme, ITheme } from './types';

const defaultColors = {
    primary: 'red',
    background: '#fff',
    card: 'red',
    text: 'red',
    border: 'red',
    notification: 'red',
}

const darkColors: IColors = {
    ...defaultColors,
    darkBg: '#454545',
};

const lightColors: IColors = {
    ...defaultColors,
    darkBg: '#454545',
};

const darkTheme: ITheme = {
    dark: true,
    colors: darkColors,
};

const lightTheme: ITheme = {
    dark: false,
    colors: lightColors,
};

export const theme: ICustomTheme = {
    dark: darkTheme,
    light: lightTheme,
};
