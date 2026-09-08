import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { environment } from '@env/environment';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { Logger } from './shared/services/logger.service';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, NavBarComponent],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
  }
}
