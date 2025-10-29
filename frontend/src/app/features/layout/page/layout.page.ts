import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet],
})
export class LayoutPage {}
