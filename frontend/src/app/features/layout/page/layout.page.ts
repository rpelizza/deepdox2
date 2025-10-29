import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.page.html',
	changeDetection: ChangeDetectionStrategy.Default,
	imports: [RouterOutlet, RouterLink, RouterLinkActive, ButtonModule, ToolbarModule, CommonModule],
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
