import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Router } from '@angular/router';

import { AppComponent } from './app.component';

@Component({ template: '' })
class TestPageComponent {}

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideNoopAnimations(),
        provideRouter([
          { path: 'home', component: TestPageComponent },
          { path: 'about', component: TestPageComponent },
          { path: 'projects', component: TestPageComponent },
        ]),
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('hides the global navbar on editorial routes', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();

    await router.navigateByUrl('/home');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('app-nav-bar')).toBeNull();

    await router.navigateByUrl('/about?from=home');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('app-nav-bar')).toBeNull();
  });

  it('keeps the global navbar on project routes', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();

    await router.navigateByUrl('/projects');
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('app-nav-bar')).not.toBeNull();
  });
});
