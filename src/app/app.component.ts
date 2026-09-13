import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@env/environment';
import { Logger } from './shared/services/logger.service';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly router: Router) {}

  get showNavbar(): boolean {
    const currentPath = this.router.url.split(/[?#]/, 1)[0];
    return currentPath !== '/' && currentPath !== '/home';
  }

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
  }
}
