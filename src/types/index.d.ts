declare type Theme = "light" | "dark";

declare interface ThemeProps extends Theme {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

declare interface SidebarProps {
    sidebarLinks: Array<{
        label: string;
        route: string;
        icon: JSX.Element;
    }>;
}