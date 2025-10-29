import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer.component';
import { HeaderComponent } from '../components/header.component';
import { SidebarComponent } from '../components/sidebar.component';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.page.html',
	changeDetection: ChangeDetectionStrategy.Default,
	imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
})
export class LayoutPage {
	// Sidebar visível por padrão em desktop, oculta em mobile
	sidebarVisible = signal(false);

	constructor(private cdr: ChangeDetectorRef) {
		if (typeof window !== 'undefined') {
			this.sidebarVisible.set(window.innerWidth >= 1024);
			this.cdr.markForCheck();
		} else {
			setTimeout(() => {
				if (typeof window !== 'undefined') {
					this.sidebarVisible.set(window.innerWidth >= 1024);
					this.cdr.markForCheck();
				}
			}, 0);
		}
	}

	toggleSidebar(): void {
		this.sidebarVisible.update(visible => !visible);
	}
}
