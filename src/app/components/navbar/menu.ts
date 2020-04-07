export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/app/home',
        title: 'Home',
        type: 'link',
    },

    {
        path: '/app/terapia',
        title: 'Terapia',
        type: 'link',
    },

]