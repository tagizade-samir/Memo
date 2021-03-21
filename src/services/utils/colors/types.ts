export interface IColors {
    darkBg: string;
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
}

export interface ITheme {
    dark: boolean;
    colors: IColors;
}

export interface ICustomTheme {
    dark: ITheme;
    light: ITheme;
}
