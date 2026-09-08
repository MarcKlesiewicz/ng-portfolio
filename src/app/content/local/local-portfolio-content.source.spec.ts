import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { providePortfolioContent } from '../portfolio-content.providers';
import { PORTFOLIO_CONTENT, PortfolioContentSource } from '../portfolio-content.source';

describe('LocalPortfolioContentSource', () => {
  let source: PortfolioContentSource;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providePortfolioContent()] });
    source = TestBed.inject(PORTFOLIO_CONTENT);
  });

  it('keeps summaries lightweight and stories complete', async () => {
    const summaries = await firstValueFrom(source.projectSummaries$);
    const story = await firstValueFrom(source.getProjectBySlug('monto'));

    expect(summaries.length).toBe(5);
    expect('blocks' in summaries[0]).toBeFalse();
    expect(story?.blocks.length).toBeGreaterThan(0);
  });

  it('orders featured work deterministically', async () => {
    const featured = await firstValueFrom(source.featuredProjects$);

    expect(featured.map((item) => item.slug)).toEqual(['monto', 'myepi', 'selvhent', 'up-n-down', 'mealbuilder']);
  });

  it('resolves legacy ids and leaves unknown values empty', async () => {
    expect((await firstValueFrom(source.getProjectByLegacyId('3')))?.slug).toBe('myepi');
    expect(await firstValueFrom(source.getProjectByLegacyId('missing'))).toBeUndefined();
  });
});
