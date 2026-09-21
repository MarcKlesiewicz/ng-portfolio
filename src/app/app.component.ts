import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

import { environment } from '@env/environment';
import { Logger } from './shared/services/logger.service';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

const log = new Logger('App');
const EDITORIAL_ROUTES = new Set(['/', '/home', '/about', '/work']);

function isEditorialRoute(url: string): boolean {
  const path = url.split(/[?#]/, 1)[0];
  return EDITORIAL_ROUTES.has(path) || path.startsWith('/work/');
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavBarComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  readonly showNavbar = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => !isEditorialRoute(event.urlAfterRedirects)),
    ),
    { initialValue: !isEditorialRoute(this.router.url) },
  );

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
  }
}
