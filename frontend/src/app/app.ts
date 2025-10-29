import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { primeConfig } from './core/config/primeng-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private _primeConfig = inject(PrimeNG);

  ngOnInit(): void {
    this._primeConfig.ripple.set(true);
    this._primeConfig.setTranslation(primeConfig.translation);
  }
}
