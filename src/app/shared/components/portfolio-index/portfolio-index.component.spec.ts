import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PortfolioIndexComponent } from './portfolio-index.component';

describe('PortfolioIndexComponent', () => {
  let fixture: ComponentFixture<PortfolioIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioIndexComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioIndexComponent);
  });

  it('renders the About-page navigation variant', () => {
    fixture.componentInstance.current = 'about';
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = Array.from(element.querySelectorAll<HTMLAnchorElement>('a.index-link'));
    const currentItem = element.querySelector<HTMLElement>('.index-link[aria-current="page"]');

    expect(element.textContent).not.toContain('Home');
    expect(currentItem?.textContent).toContain('About');
    expect(currentItem?.textContent).toContain('I');
    expect(links[0].textContent).toContain('II');
    expect(links[1].textContent).toContain('III');
  });
});
