import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [ButtonModule, CardModule],
})
export class DashboardPage {}
