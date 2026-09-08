import { PortfolioContentSnapshot } from './models/portfolio-content.model';
import { PORTFOLIO_CONTENT_DATA } from './local/portfolio-content.data';
import { validatePortfolioContent } from './portfolio-content.validators';

describe('validatePortfolioContent', () => {
  it('accepts the production local dataset', () => {
    expect(() => validatePortfolioContent(PORTFOLIO_CONTENT_DATA)).not.toThrow();
  });

  it('rejects duplicate stable slugs', () => {
    const duplicate: PortfolioContentSnapshot = {
      ...PORTFOLIO_CONTENT_DATA,
      projects: PORTFOLIO_CONTENT_DATA.projects.map((project, index) =>
        index === 1 ? { ...project, slug: PORTFOLIO_CONTENT_DATA.projects[0].slug } : project
      ),
    };

    expect(() => validatePortfolioContent(duplicate)).toThrowError(/Duplicate project slug/);
  });

  it('rejects unknown technologies and unsafe links', () => {
    const invalidTechnology: PortfolioContentSnapshot = {
      ...PORTFOLIO_CONTENT_DATA,
      projects: PORTFOLIO_CONTENT_DATA.projects.map((project, index) =>
        index === 0 ? { ...project, technologies: ['unknown'] } : project
      ),
    };
    expect(() => validatePortfolioContent(invalidTechnology)).toThrowError(/unknown technology/);

    const unsafeLink: PortfolioContentSnapshot = {
      ...PORTFOLIO_CONTENT_DATA,
      projects: PORTFOLIO_CONTENT_DATA.projects.map((project, index) =>
        index === 0 ? { ...project, liveUrl: 'javascript:alert(1)' } : project
      ),
    };
    expect(() => validatePortfolioContent(unsafeLink)).toThrowError(/unsafe protocol/);
  });

  it('rejects media without intrinsic dimensions', () => {
    const invalid: PortfolioContentSnapshot = {
      ...PORTFOLIO_CONTENT_DATA,
      projects: PORTFOLIO_CONTENT_DATA.projects.map((project, index) =>
        index === 0 ? { ...project, thumbnail: { ...project.thumbnail, width: 0 } } : project
      ),
    };

    expect(() => validatePortfolioContent(invalid)).toThrowError(/intrinsic dimensions/);
  });
});
