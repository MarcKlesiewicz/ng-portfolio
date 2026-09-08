import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter, Router, RouterOutlet, TitleStrategy } from '@angular/router';
import { PortfolioMetaService } from './portfolio-meta.service';

@Component({ template: '<router-outlet />', imports: [RouterOutlet] })
class TestShell {}
@Component({ template: '<h1>Page</h1>' })
class TestPage {}

describe('PortfolioMetaService', () => {
  it('updates title and description after navigation', async () => {
    TestBed.configureTestingModule({
      imports: [TestShell],
      providers: [
        { provide: TitleStrategy, useExisting: PortfolioMetaService },
        provideRouter([
          {
            path: 'about',
            component: TestPage,
            title: 'About | Marc Klesiewicz',
            data: { description: 'About Marc.' },
          },
        ]),
      ],
    });
    const fixture = TestBed.createComponent(TestShell);
    await TestBed.inject(Router).navigateByUrl('/about');
    fixture.detectChanges();
    expect(TestBed.inject(Title).getTitle()).toBe('About | Marc Klesiewicz');
    expect(TestBed.inject(Meta).getTag('name="description"')?.content).toBe('About Marc.');
  });
});
