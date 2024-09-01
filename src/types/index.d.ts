declare type Theme = "light" | "dark";

declare interface ThemeProps extends Theme {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}