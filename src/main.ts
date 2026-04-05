/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '@env/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './app/home/home.module';
import { AboutModule } from './app/about/about.module';
import { ProjectsModule } from './app/work/projects.module';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
      RouterModule,
      BrowserAnimationsModule,
      HomeModule,
      AboutModule,
      ProjectsModule,
      AppRoutingModule
    ),
    provideZoneChangeDetection(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: IMAGE_CONFIG, useValue: { disableImageSizeWarning: true, disableImageLazyLoadWarning: true } },
  ],
}).catch((err) => console.error(err));
