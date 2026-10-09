export const PORTFOLIO_PAGES = [
  { id: 'about', label: 'About', index: 'I', route: '/about' },
  { id: 'work', label: 'Work', index: 'II', route: '/work' },
  { id: 'off-topic', label: 'Off topic', index: 'III', route: '/off-topic' },
] as const;

export type PortfolioPageId = (typeof PORTFOLIO_PAGES)[number]['id'];
