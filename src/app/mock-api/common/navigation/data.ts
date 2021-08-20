/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'apps',
        title: 'Applications',
        subtitle: 'Custom made application designs',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'apps.chat',
                title: 'Chat',
                type: 'basic',
                icon: 'heroicons_outline:chat-alt',
                link: '/apps/chat',
            },
            {
                id: 'apps.contacts',
                title: 'Contacts',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/apps/contacts',
            },
        ],
    },
    {
        id: 'pages',
        title: 'Pages',
        subtitle: 'Custom made page designs',
        type: 'group',
        icon: 'heroicons_outline:document',
        children: [
            // {
            //     id: 'pages.activities',
            //     title: 'Activities',
            //     type: 'basic',
            //     icon: 'heroicons_outline:menu-alt-2',
            //     link: '/pages/activities',
            // },



            {
                id: 'pages.profile',
                title: 'Profile',
                type: 'basic',
                icon: 'heroicons_outline:user-circle',
                link: '/pages/profile',
            },
            {
                id: 'pages.settings',
                title: 'Settings',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/pages/settings',
            },
        ],
    },

    {
        id: 'divider-1',
        type: 'divider',
    },

    {
        id: 'divider-2',
        type: 'divider',
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    // {
    //     id: 'dashboards',
    //     title: 'Dashboards',
    //     tooltip: 'Dashboards',
    //     type: 'aside',
    //     icon: 'heroicons_outline:home',
    //     children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
    {
        id: 'apps',
        title: 'Apps',
        tooltip: 'Apps',
        type: 'aside',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        tooltip: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    // {
    //     id: 'user-interface',
    //     title: 'UI',
    //     tooltip: 'UI',
    //     type: 'aside',
    //     icon: 'heroicons_outline:collection',
    //     children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
    {
        id: 'navigation-features',
        title: 'Navigation',
        tooltip: 'Navigation',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    // {
    //     id: 'dashboards',
    //     title: 'DASHBOARDS',
    //     type: 'group',
    //     children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
    {
        id: 'apps',
        title: 'APPS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'others',
        title: 'OTHERS',
        type: 'group',
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    // {
    //     id: 'user-interface',
    //     title: 'User Interface',
    //     type: 'aside',
    //     icon: 'heroicons_outline:collection',
    //     children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
    // {
    //     id: 'navigation-features',
    //     title: 'Navigation Features',
    //     type: 'aside',
    //     icon: 'heroicons_outline:menu',
    //     children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    // {
    //     id: 'dashboards',
    //     title: 'Dashboards',
    //     type: 'group',
    //     icon: 'heroicons_outline:home',
    //     children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
    {
        id: 'apps',
        title: 'Apps',
        type: 'group',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    // {
    //     id: 'user-interface',
    //     title: 'UI',
    //     type: 'group',
    //     icon: 'heroicons_outline:collection',
    //     children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
    // {
    //     id: 'navigation-features',
    //     title: 'Misc',
    //     type: 'group',
    //     icon: 'heroicons_outline:menu',
    //     children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
];
