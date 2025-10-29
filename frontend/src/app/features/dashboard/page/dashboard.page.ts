import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonModule],
})
export class DashboardPage {}
