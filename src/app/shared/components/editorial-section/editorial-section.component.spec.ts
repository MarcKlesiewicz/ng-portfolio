import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorialSectionComponent } from './editorial-section.component';

@Component({
  template: `
    <app-editorial-section eyebrow="Selected work" title="Projects" layout="offset">
      <p id="first">First</p>
      <a id="second" href="/projects">Second</a>
    </app-editorial-section>
  `,
  imports: [EditorialSectionComponent],
})
class TestHostComponent {}

describe('EditorialSectionComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('projects content in semantic source order', () => {
    const content = fixture.nativeElement.querySelector('.editorial-section__content');
    expect(Array.from(content.children).map((element) => (element as HTMLElement).id)).toEqual(['first', 'second']);
  });

  it('exposes a stable layout class and heading', () => {
    const host = fixture.nativeElement.querySelector('app-editorial-section');
    expect(host.classList).toContain('editorial-section-host--offset');
    expect(host.querySelector('h2').textContent).toContain('Projects');
  });
});
