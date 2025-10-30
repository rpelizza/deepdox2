import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [ButtonModule, ToolbarModule, RouterModule],
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	sidebarVisible = input.required<boolean>();
	toggleSidebar = output<void>();
}
