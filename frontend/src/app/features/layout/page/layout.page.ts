import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer.component';
import { HeaderComponent } from '../components/header.component';
import { SidebarComponent } from '../components/sidebar.component';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
})
export class LayoutPage {
	sidebarVisible = signal(false);

	constructor() {
		// Inicializa o sidebar baseado no tamanho da tela
		if (typeof window !== 'undefined') {
			this.sidebarVisible.set(window.innerWidth >= 1024);
		}
	}

	@HostListener('window:resize')
	onResize(): void {
		if (window.innerWidth >= 1024 && !this.sidebarVisible()) {
			this.sidebarVisible.set(true);
		}
	}

	toggleSidebar(): void {
		this.sidebarVisible.update(visible => !visible);
	}
}
