import { TestBed } from '@angular/core/testing';

import { HovableIconComponent } from './hovable-icon.component';

describe('HovableIconComponent', () => {
  it('preserves optional defaults and reflects input changes', () => {
    const fixture = TestBed.createComponent(HovableIconComponent);
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;
    expect(image.getAttribute('src')).toBe('');
    expect(image.getAttribute('alt')).toBe('');

    fixture.componentRef.setInput('iconPath', 'assets/svgs/github_logo.svg');
    fixture.componentRef.setInput('iconAlt', 'Profile');
    fixture.componentRef.setInput('link', 'https://example.com/profile');
    fixture.componentRef.setInput('defaultFilter', 'muted');
    fixture.componentRef.setInput('hoverFilter', 'highlighted');
    fixture.detectChanges();

    expect(image.getAttribute('src')).toBe('assets/svgs/github_logo.svg');
    expect(image.getAttribute('alt')).toBe('Profile');
    expect(image.classList).toContain('muted');
    expect(fixture.nativeElement.querySelector('a').getAttribute('href')).toBe('https://example.com/profile');

    image.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    fixture.detectChanges();
    expect(image.classList).toContain('highlighted');
  });
});
