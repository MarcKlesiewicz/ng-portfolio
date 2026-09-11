import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { providePortfolioContent } from '../content/portfolio-content.providers';
import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes';

describe('home routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(HOME_ROUTES), providePortfolioContent()],
    });
  });

  it('renders the corporate branch for one exact corporate=true value', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/?corporate=true', HomeComponent);

    expect(harness.routeNativeElement?.querySelector('[data-home-variant="corporate"]')).toBeTruthy();
    expect(harness.routeNativeElement?.textContent).not.toContain('Hero in progress');
  });

  [
    '/',
    '/?corporate=false',
    '/?corporate=TRUE',
    '/?corporate=',
    '/?corporate=%20true%20',
    '/?corporate=true&corporate=true',
    '/?corporate=true&corporate=false',
    '/?source=linkedin',
  ].forEach((url) => {
    it(`renders only the holding state for ${url}`, async () => {
      const harness = await RouterTestingHarness.create();

      await harness.navigateByUrl(url, HomeComponent);

      const element = harness.routeNativeElement as HTMLElement;
      expect(element.querySelectorAll('h1').length).toBe(1);
      expect(element.querySelector('h1')?.textContent).toContain('Hero in progress');
      expect(element.querySelector('[data-home-variant="corporate"]')).toBeNull();
      expect(element.querySelector('app-hero-section')).toBeNull();
      expect(element.querySelector('.featured-card')).toBeNull();
      expect(element.querySelector('.home-closing')).toBeNull();
    });
  });

  it('keeps corporate mode active when unrelated query parameters are present', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/?corporate=true&source=linkedin', HomeComponent);

    expect(harness.routeNativeElement?.querySelector('[data-home-variant="corporate"]')).toBeTruthy();
  });

  it('reacts to query-only navigation in both directions without replacing Home', async () => {
    const harness = await RouterTestingHarness.create();
    const holdingComponent = await harness.navigateByUrl('/', HomeComponent);

    const corporateComponent = await harness.navigateByUrl('/?corporate=true', HomeComponent);
    expect(corporateComponent).toBe(holdingComponent);
    expect(harness.routeNativeElement?.querySelector('[data-home-variant="corporate"]')).toBeTruthy();

    const restoredComponent = await harness.navigateByUrl('/', HomeComponent);
    expect(restoredComponent).toBe(holdingComponent);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Hero in progress');
  });
});
