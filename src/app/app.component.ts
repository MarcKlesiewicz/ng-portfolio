import { ChangeDetectionStrategy, Component, computed, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

import { environment } from '@env/environment';
import { Logger } from './shared/services/logger.service';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

const log = new Logger('App');
const EDITORIAL_ROUTES = new Set(['/', '/home', '/about']);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NavBarComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  private readonly currentPath = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects.split(/[?#]/, 1)[0])
    ),
    { initialValue: this.router.url.split(/[?#]/, 1)[0] }
  );

  readonly showNavbar = computed(() => !EDITORIAL_ROUTES.has(this.currentPath()));

  constructor(private readonly router: Router) {}

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
  }
}
