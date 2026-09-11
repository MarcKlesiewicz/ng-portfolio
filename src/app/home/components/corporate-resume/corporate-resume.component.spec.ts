import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioProfile, ProjectSummary, Technology } from '../../../content/models/portfolio-content.model';
import { PORTFOLIO_CONTENT_DATA } from '../../../content/local/portfolio-content.data';
import { CorporateResumeComponent } from './corporate-resume.component';

describe('CorporateResumeComponent', () => {
  let fixture: ComponentFixture<CorporateResumeComponent>;

  const profile = PORTFOLIO_CONTENT_DATA.profile;
  const technologies = PORTFOLIO_CONTENT_DATA.technologies;
  const projects: readonly ProjectSummary[] = PORTFOLIO_CONTENT_DATA.projects;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateResumeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateResumeComponent);
    fixture.componentRef.setInput('profile', profile);
    fixture.componentRef.setInput('technologies', technologies);
    fixture.componentRef.setInput('featuredProjects', projects);
    fixture.detectChanges();
  });

  it('opens with a truthful portrait-led product hero and unmistakable satire', () => {
    const element = fixture.nativeElement as HTMLElement;
    const hero = element.querySelector('[data-corporate-region="hero"]') as HTMLElement;
    const portrait = hero.querySelector('img') as HTMLImageElement;

    expect(hero.querySelector('h1')?.textContent).toContain('Marc Klesiewicz™');
    expect(hero.textContent).toContain(profile.name);
    expect(hero.textContent).toContain(profile.role);
    expect(hero.textContent).toContain(profile.location);
    expect(hero.textContent).toContain('enterprise-grade developer product');
    expect(hero.textContent).toContain('This is a corporate parody');
    expect(portrait.getAttribute('src')).toBe(profile.portrait.src);
    expect(portrait.getAttribute('alt')).toBe(profile.portrait.alt);
    expect(portrait.getAttribute('width')).toBe(String(profile.portrait.width));
    expect(portrait.getAttribute('height')).toBe(String(profile.portrait.height));
  });

  it('uses one page heading and a sequential section heading hierarchy', () => {
    const element = fixture.nativeElement as HTMLElement;
    const headings = Array.from(element.querySelectorAll('h1, h2, h3')) as HTMLHeadingElement[];

    expect(element.querySelectorAll('h1').length).toBe(1);
    expect(headings[0].tagName).toBe('H1');
    headings.forEach((heading, index) => {
      if (heading.tagName === 'H3') {
        expect(headings.slice(0, index).some((candidate) => candidate.tagName === 'H2')).toBeTrue();
      }
    });
  });

  it('renders every authored introduction, capability, technology label, and experience in source order', () => {
    const element = fixture.nativeElement as HTMLElement;
    const introduction = Array.from(element.querySelectorAll('.executive-summary__copy > p')).map((paragraph) =>
      paragraph.textContent?.trim()
    );
    const capabilityGroups = Array.from(element.querySelectorAll('.capabilities__grid > section'));

    expect(introduction).toEqual(profile.introduction);
    expect(capabilityGroups.length).toBe(profile.capabilityGroups.length);
    profile.capabilityGroups.forEach((group, index) => {
      const expectedLabels = group.technologyIds.map(
        (id) => technologies.find((technology) => technology.id === id)?.label ?? id
      );
      const renderedLabels = Array.from(capabilityGroups[index].querySelectorAll('li')).map((label) =>
        label.textContent?.trim()
      );

      expect(capabilityGroups[index].querySelector('h3')?.textContent?.trim()).toBe(group.title);
      expect(renderedLabels).toEqual(expectedLabels);
    });

    const experienceItems = Array.from(element.querySelectorAll('[data-experience-item]'));
    expect(experienceItems.length).toBe(profile.experience.length);
    profile.experience.forEach((item, index) => {
      expect(experienceItems[index].textContent).toContain(item.organization);
      expect(experienceItems[index].textContent).toContain(item.role);
      expect(experienceItems[index].textContent).toContain(item.start);
      expect(experienceItems[index].textContent).toContain(item.end);
      item.description.forEach((paragraph) => expect(experienceItems[index].textContent).toContain(paragraph));
    });
  });

  it('omits the endorsement region when no endorsement is supplied', () => {
    fixture.componentRef.setInput('profile', { ...profile, endorsement: undefined });
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[data-corporate-region="endorsement"]')).toBeNull();
  });

  [0, 1, 2, 4].forEach((projectCount) => {
    it(`renders ${Math.min(projectCount, 3)} of ${projectCount} supplied projects in order`, () => {
      fixture.componentRef.setInput('featuredProjects', projects.slice(0, projectCount));
      fixture.detectChanges();

      const cards = Array.from(fixture.nativeElement.querySelectorAll('[data-featured-project]')) as HTMLElement[];
      const expected = projects.slice(0, Math.min(projectCount, 3));
      expect(cards.length).toBe(expected.length);
      expected.forEach((project, index) => expect(cards[index].textContent).toContain(project.name));
    });
  });

  it('links featured projects to explicit internal slugs without corporate query state', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('[data-featured-project] a')
    ) as HTMLAnchorElement[];

    expect(links.length).toBe(3);
    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(`/projects/${projects[index].slug}`);
      expect(link.getAttribute('href')?.startsWith('/')).toBeTrue();
      expect(link.getAttribute('href')).not.toContain('corporate');
    });
  });

  it('uses semantic quotation markup with a visible attribution', () => {
    const endorsement = fixture.nativeElement.querySelector('[data-corporate-region="endorsement"]') as HTMLElement;
    const quotation = endorsement.querySelector('blockquote');
    const attribution = endorsement.querySelector('figcaption');

    expect(quotation?.textContent).toContain(profile.endorsement?.quote);
    expect(attribution?.textContent).toContain(profile.endorsement?.attribution);
  });

  it('shows pending contact labels as honest, non-focusable non-actions', () => {
    const element = fixture.nativeElement as HTMLElement;
    const contactRegion = element.querySelector('[data-corporate-region="contact"]') as HTMLElement;
    const labels = Array.from(contactRegion.querySelectorAll('[data-pending-contact]')) as HTMLElement[];

    expect(labels.map((label) => label.textContent?.trim())).toEqual(['LinkedIn', 'GitHub', 'Email']);
    expect(contactRegion.textContent).toContain('Contact links are pending');
    expect(contactRegion.querySelector('a')).toBeNull();
    expect(contactRegion.querySelector('button')).toBeNull();
    labels.forEach((label) => {
      expect(label.hasAttribute('href')).toBeFalse();
      expect(label.hasAttribute('tabindex')).toBeFalse();
    });
  });

  it('keeps long factual and parody labels present without DOM truncation', () => {
    const longOrganization = 'A Very Long Organization Name That Must Remain Entirely Available';
    const longTechnology = 'A Deliberately Long Technology Label That Must Not Be Ellipsized In The DOM';
    const longGroup = 'A Comically Comprehensive Enterprise Capability Portfolio';
    const extendedProfile: PortfolioProfile = {
      ...profile,
      capabilityGroups: [{ title: longGroup, technologyIds: ['long-technology'] }],
      experience: [{ ...profile.experience[0], organization: longOrganization }],
    };
    const extendedTechnologies: readonly Technology[] = [
      { id: 'long-technology', label: longTechnology, icon: 'long.svg', group: 'tooling' },
    ];

    fixture.componentRef.setInput('profile', extendedProfile);
    fixture.componentRef.setInput('technologies', extendedTechnologies);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain(longOrganization);
    expect(text).toContain(longTechnology);
    expect(text).toContain(longGroup);
  });

  it('falls back to an authored technology id when the registry has no matching label', () => {
    const missingTechnologyId = 'future-stack-under-review';
    fixture.componentRef.setInput('profile', {
      ...profile,
      capabilityGroups: [{ title: 'Contingency capability', technologyIds: [missingTechnologyId] }],
    });
    fixture.componentRef.setInput('technologies', []);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(missingTechnologyId);
  });

  it('labels qualitative mock metrics as jokes instead of factual outcomes', () => {
    const metrics = fixture.nativeElement.querySelector('[data-satirical-metrics]') as HTMLElement;

    expect(metrics.textContent).toContain('Not independently verified because they are jokes');
    expect(metrics.textContent).not.toMatch(/\d/);
  });

  it('groups every metric as a valid definition-list entry', () => {
    const metrics = fixture.nativeElement.querySelector('[data-satirical-metrics]') as HTMLElement;
    const list = metrics.matches('dl') ? metrics : metrics.querySelector('dl');
    const groups = Array.from(list?.children ?? []) as HTMLElement[];

    expect(list).not.toBeNull();
    expect(groups.length).toBeGreaterThan(0);
    groups.forEach((group) => {
      expect(group.tagName).toBe('DIV');
      expect(group.querySelector(':scope > dt')).not.toBeNull();
      expect(group.querySelector(':scope > dd')).not.toBeNull();
    });
  });

  it('keeps decorative marks out of the accessibility tree and avoids scripted presentation', () => {
    const element = fixture.nativeElement as HTMLElement;
    const decorativeMarks = Array.from(element.querySelectorAll('.deployments__action span')) as HTMLElement[];

    expect(decorativeMarks.length).toBeGreaterThan(0);
    decorativeMarks.forEach((mark) => expect(mark.getAttribute('aria-hidden')).toBe('true'));
    expect(element.querySelector('[style]')).toBeNull();
    expect(element.querySelector('script')).toBeNull();
  });
});
