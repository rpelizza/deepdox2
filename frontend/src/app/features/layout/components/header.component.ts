import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule, ButtonModule, ToolbarModule],
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	sidebarVisible = input.required<boolean>();
	toggleSidebar = output<void>();
}
