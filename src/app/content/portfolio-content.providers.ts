import { Provider } from '@angular/core';
import { LocalPortfolioContentSource } from './local/local-portfolio-content.source';
import { PORTFOLIO_CONTENT } from './portfolio-content.source';

export function providePortfolioContent(): Provider[] {
  return [LocalPortfolioContentSource, { provide: PORTFOLIO_CONTENT, useExisting: LocalPortfolioContentSource }];
}
