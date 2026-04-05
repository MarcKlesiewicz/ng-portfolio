/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import { IMAGE_CONFIG } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
      BrowserAnimationsModule
    ),
    provideRouter(routes),
    provideZoneChangeDetection(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: IMAGE_CONFIG, useValue: { disableImageSizeWarning: true, disableImageLazyLoadWarning: true } },
  ],
}).catch((err) => console.error(err));
