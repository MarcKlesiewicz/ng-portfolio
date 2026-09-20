import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { WorkDetailPageComponent } from './work/work-detail-page/work-detail-page.component';
import { WorkPageComponent } from './work/work-page/work-page.component';

describe('APP_ROUTES', () => {
  let harness: RouterTestingHarness;
  let router: Router;
  let title: Title;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(APP_ROUTES)],
    });

    harness = await RouterTestingHarness.create();
    router = TestBed.inject(Router);
    title = TestBed.inject(Title);
  });

  it('redirects the empty path to the lazy home route', async () => {
    await harness.navigateByUrl('/', HomeComponent);

    expect(router.url).toBe('/home');
    expect(title.getTitle()).toBe('klesiewicz.dev | home');
  });

  it('loads the about feature directly and sets its title', async () => {
    await harness.navigateByUrl('/about', AboutComponent);

    expect(router.url).toBe('/about');
    expect(title.getTitle()).toBe('klesiewicz.dev | about');
  });

  it('loads the work feature directly and sets its title', async () => {
    await harness.navigateByUrl('/work', WorkPageComponent);

    expect(router.url).toBe('/work');
    expect(title.getTitle()).toBe('klesiewicz.dev | work');
  });

  it('loads a work detail view by slug', async () => {
    await harness.navigateByUrl('/work/monto', WorkDetailPageComponent);

    expect(router.url).toBe('/work/monto');
    expect(title.getTitle()).toBe('klesiewicz.dev | work');
  });

  it('redirects an unknown path to home without looping', async () => {
    await harness.navigateByUrl('/missing-page', HomeComponent);

    expect(router.url).toBe('/home');
  });
});
