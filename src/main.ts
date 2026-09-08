/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, TitleStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { providePortfolioContent } from './app/content/portfolio-content.providers';
import { PortfolioMetaService } from './app/shared/services/portfolio-meta.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ),
    provideRouter(routes),
    provideZoneChangeDetection(),
    provideHttpClient(withInterceptorsFromDi()),
    providePortfolioContent(),
    { provide: TitleStrategy, useExisting: PortfolioMetaService },
  ],
}).catch((err) => console.error(err));
