import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-nav-bar',
  template: '',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
class NavBarStubComponent {}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavBarStubComponent],
      providers: [],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }), 30000);

  it('should hide the global navbar on editorial routes', () => {
    const homeComponent = new AppComponent({ url: '/home' } as Router);
    const aboutComponent = new AppComponent({ url: '/about?from=home' } as Router);

    expect(homeComponent.showNavbar).toBeFalse();
    expect(aboutComponent.showNavbar).toBeFalse();
  });

  it('should keep the global navbar on other routes', () => {
    const component = new AppComponent({ url: '/projects' } as Router);

    expect(component.showNavbar).toBeTrue();
  });
});
