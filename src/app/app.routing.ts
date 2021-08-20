import {Route} from '@angular/router';
import {LayoutComponent} from 'app/layout/layout.component';
import {InitialDataResolver} from 'app/app.resolvers';

export const appRoutes: Route[] = [
    // Redirect empty path to 'apps/chat'
    {path: '', pathMatch: 'full', redirectTo: 'apps/chat'},
    {path: '', pathMatch: 'full', redirectTo: 'sign-in'},

    // Redirect signed in user to the 'apps/chat'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'chat'},

    {
        path: 'chat',
        loadChildren: () =>
            import(
                'app/modules/admin/apps/chat/chat.module'
                ).then(m => m.ChatModule),
    },

    // Auth routes for guests
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.module'
                        ).then(m => m.AuthConfirmationRequiredModule),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.module'
                        ).then(m => m.AuthForgotPasswordModule),
            },
            {
                path: 'chat',
                loadChildren: () =>
                    import(
                        'app/modules/admin/apps/chat/chat.module'
                        ).then(m => m.ChatModule),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.module'
                        ).then(m => m.AuthResetPasswordModule),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.module').then(
                        m => m.AuthSignInModule
                    ),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.module').then(
                        m => m.AuthSignUpModule
                    ),
            },
        ],
    },

    // Auth routes for authenticated users
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.module').then(
                        m => m.AuthSignOutModule
                    ),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.module'
                        ).then(m => m.AuthUnlockSessionModule),
            },
        ],
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('app/modules/landing/home/home.module').then(
                        m => m.LandingHomeModule
                    ),
            },
        ],
    },

    // Admin routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            // Dashboards

            // Apps
            {
                path: 'apps',
                children: [
                    {
                        path: 'contacts',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/contacts/contacts.module'
                                ).then(m => m.ContactsModule),
                    },
                ],
            },

            // Pages
            {
                path: 'pages',
                children: [
                    // Error
                    // Profile
                    {
                        path: 'profile',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/pages/profile/profile.module'
                                ).then(m => m.ProfileModule),
                    },

                    // Settings
                    {
                        path: 'settings',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/pages/settings/settings.module'
                                ).then(m => m.SettingsModule),
                    },
                ],
            },
        ]
    },
];
