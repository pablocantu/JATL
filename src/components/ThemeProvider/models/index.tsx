export type ThemeType = 'light' | 'dark';
export interface ThemeColors {
    text: string,
    backgroundPrimary: string,
    backgroundSecondary: string,
    backgroundTertirary: string,
    primary: string,
    secondary: string,
    success: string,
    danger: string,
    warning: string
}
export interface ThemeOption {
    [opt: string]: ThemeColors
}