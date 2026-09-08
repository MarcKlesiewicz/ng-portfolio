import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectStoryBlock } from '../../../content/models/portfolio-content.model';
import { ProjectStoryComponent } from './project-story.component';

describe('ProjectStoryComponent', () => {
  let fixture: ComponentFixture<ProjectStoryComponent>;
  beforeEach(async () => {
    const blocks: ProjectStoryBlock[] = [
      { kind: 'heading', level: 2, text: 'Challenge' },
      { kind: 'paragraph', text: 'A structured paragraph.' },
      { kind: 'list', style: 'unordered', items: ['One'] },
      { kind: 'media', media: { src: 'story.jpg', alt: 'Story screen', width: 800, height: 500 } },
      { kind: 'callout', title: 'Result', text: 'A useful outcome.' },
      { kind: 'links', links: [{ label: 'Visit', url: 'https://example.com' }] },
    ];
    await TestBed.configureTestingModule({ imports: [ProjectStoryComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProjectStoryComponent);
    fixture.componentRef.setInput('blocks', blocks);
    fixture.detectChanges();
  });
  it('renders every supported block as semantic DOM', () => {
    expect(fixture.nativeElement.querySelector('h2')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('ul')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('figure img').alt).toBe('Story screen');
    expect(fixture.nativeElement.querySelector('aside')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('a').rel).toContain('noopener');
  });
});
