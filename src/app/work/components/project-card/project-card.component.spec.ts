import { describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';

import { ProjectCardComponent } from './project-card.component';
import { Project, ProjectTags } from '../../models/project.model';

describe('ProjectCardComponent', () => {
  const project: Project = {
    id: 'signal-input',
    name: 'Signal input',
    description: 'Input fixture',
    thumbnail: 'assets/images/monto/monto_phones.png',
    technologies: ['Angular'],
    tags: [ProjectTags.SIDE_QUESTS],
    markdownPath: '',
    year: 2026,
  };

  it('renders safely without a project and reflects project input changes', () => {
    const fixture = TestBed.createComponent(ProjectCardComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.card-title').textContent.trim()).toBe('');

    fixture.componentRef.setInput('project', project);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.card-title').textContent.trim()).toBe('Signal input');
    expect(fixture.nativeElement.textContent).toContain('Angular');
  });
});
