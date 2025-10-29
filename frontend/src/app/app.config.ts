import { provideHttpClient, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import {
	ApplicationConfig,
	LOCALE_ID,
	provideBrowserGlobalErrorListeners,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
	PreloadAllModules,
	provideRouter,
	withComponentInputBinding,
	withInMemoryScrolling,
	withPreloading,
	withRouterConfig,
	withViewTransitions,
} from '@angular/router';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { AURA_CONFIG } from './core/config/aura.config';

export const appConfig: ApplicationConfig = {
	providers: [
		{ provide: LOCALE_ID, useValue: 'pt-BR' },
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({
			eventCoalescing: true,
			runCoalescing: true,
		}),
		provideRouter(
			routes,
			withPreloading(PreloadAllModules),
			withViewTransitions(),
			withRouterConfig({
				paramsInheritanceStrategy: 'always',
				urlUpdateStrategy: 'eager',
				onSameUrlNavigation: 'reload',
			}),
			withComponentInputBinding(),
			withInMemoryScrolling({
				scrollPositionRestoration: 'enabled',
				anchorScrolling: 'enabled',
			}),
		),
		provideAnimations(),
		{
			provide: MessageService,
			useClass: MessageService,
		},
		provideHttpClient(
			withInterceptors([]),
			withXsrfConfiguration({
				cookieName: 'XSRF-TOKEN',
				headerName: 'X-XSRF-TOKEN',
			}),
		),
		providePrimeNG({
			ripple: true,
			theme: {
				preset: AURA_CONFIG,
				options: {
					darkModeSelector: '.dark',
					cssLayer: {
						name: 'primeng',
						order: 'primeng',
					},
				},
			},
		}),
	],
};
