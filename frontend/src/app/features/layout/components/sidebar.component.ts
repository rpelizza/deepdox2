import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, ButtonModule],
	templateUrl: './sidebar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
	sidebarVisible = input.required<boolean>();
	toggleSidebar = output<void>();
}

