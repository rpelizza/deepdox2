import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-landing-header',
	standalone: true,
	imports: [RouterModule, ButtonModule],
	templateUrl: './landing-header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent {
	isScrolled = signal(false);

	@HostListener('window:scroll', [])
	onWindowScroll(): void {
		const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
		this.isScrolled.set(scrollPosition > 50);
	}

	scrollToSection(sectionId: string): void {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	goToLogin(): void {
		// TODO: Implementar navegação para login
		console.log('Navegar para login');
	}
}

