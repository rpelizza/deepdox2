import { Routes } from '@angular/router';
import { LayoutPage } from './features/layout/page/layout.page';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./features/landing/page/landing.page').then(m => m.LandingPage),
	},
	{
		path: 'dashboard',
		component: LayoutPage,
		children: [
			{
				path: '',
				loadComponent: () => import('./features/dashboard/page/dashboard.page').then(m => m.DashboardPage),
			},
		],
	},
];
