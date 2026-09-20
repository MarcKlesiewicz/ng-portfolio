import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@env/environment';
import { Logger } from './shared/services/logger.service';

const log = new Logger('App');
const EDITORIAL_ROUTES = new Set(['/', '/home', '/about']);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private readonly router: Router) {}

  get showNavbar(): boolean {
    const currentPath = this.router.url.split(/[?#]/, 1)[0];
    return !EDITORIAL_ROUTES.has(currentPath);
  }

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
  }
}
