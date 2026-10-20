import { WorkItem } from '../models/work-item.model';

export const WORK_ITEMS: readonly WorkItem[] = [
  {
    id: '8',
    slug: 'autocom',
    name: 'Autocom',
    description:
      'A dealer-focused vehicle auction platform that also lets private owners sell their cars, which I have helped shape, scale and modernise since 2023.',
    thumbnail: {
      src: '/assets/images/autocom/autocom-home.png',
      alt: 'Autocom marketplace home page with vehicle search and live auction listings',
    },
    logo: { src: '/assets/images/autocom/autocom-logo.png', alt: 'Autocom logo' },
    technologies: ['Angular', 'TypeScript', 'Nx', 'RxJS', 'Signals', 'JSON Forms'],
    category: 'Professional work',
    year: 2023,
    period: '2023–present',
    liveUrl: 'https://m.autocom.dk/',
    contribution:
      'I work across the frontend, from dealer-facing search and live bidding to onboarding, content management and the architecture behind multiple branded marketplaces.',
    outcome:
      'I have helped make a long-lived application more scalable, observable and consistent while continuing to deliver features used across multiple European marketplaces.',
    story: [
      {
        kind: 'paragraph',
        text: 'I joined Autorola in October 2023 to work on Autocom, the dealer-facing side of its European vehicle remarketing business. Leasing companies, manufacturers, fleet owners and private sellers bring used vehicles to the platform. Professional dealers use it to find stock, follow auctions, bid and manage what happens after a sale.',
      },
      {
        kind: 'callout',
        title: 'One product, many marketplaces',
        text: 'The same frontend also powers white-labelled partner marketplaces and an embedded vehicle experience in Autorola’s established desktop product. Every feature has to work across markets, brands and different ways of buying.',
      },
      { kind: 'heading', text: 'The buying journey' },
      {
        kind: 'paragraph',
        text: 'My first product work centred on the path dealers use every day. I have built and refined the experience from the first search through the live auction and into the practical work that follows a purchase.',
      },
      {
        kind: 'media',
        media: {
          src: '/assets/images/autocom/autocom-vehicle-list.png',
          alt: 'Autocom vehicle results with detailed filters and live auction information',
        },
      },
      {
        kind: 'features',
        title: 'Product work',
        items: [
          'Live and tender bidding with real-time price updates and bid feedback over Lightstreamer',
          'Vehicle search, active filters, saved searches and email-based search agents',
          'Favourites, auction lists and detailed vehicle, damage and specification views',
          'Multi-step dealer onboarding with uploads, country-specific fields and access guards',
          'Account, employee and document management for approved dealers',
          'Trades, claims and stock-locator workflows after the auction',
        ],
      },
      {
        kind: 'media',
        media: {
          src: '/assets/images/autocom/autocom-vehicle-detail.png',
          alt: 'Autocom vehicle detail page with auction price, gallery and vehicle specifications',
        },
      },
      { kind: 'heading', text: 'Marketplace operations' },
      {
        kind: 'paragraph',
        text: 'A marketplace also needs to be operated. I have built admin tools that let business teams change navigation, publish pages and brand a partner site without waiting for a developer. The largest of these is a section-based page editor with inline rich text and form-driven widget configuration.',
      },
      {
        kind: 'features',
        title: 'Marketplace tooling',
        items: [
          'Menu, link and page management for each marketplace',
          'Composable page sections configured with JSON Forms and edited with Froala',
          'Flexible page composition with section reordering, scheduled publishing and unsaved-change safeguards',
          'Conflict handling that prevents editors from overwriting each other’s work',
          'A theme editor with live preview for white-label colours, logos and access rules',
        ],
      },
      { kind: 'heading', text: 'Built to evolve' },
      {
        kind: 'paragraph',
        text: 'Much of my contribution happens below the visible product. Autocom has to keep shipping while its foundations evolve, so I have worked with the team to break large migrations into changes that can be reviewed and released safely.',
      },
      {
        kind: 'features',
        title: 'Engineering foundations',
        items: [
          'Restructured the application as an Nx monorepo with enforced layers and about 20 feature domains',
          'Untangled circular dependencies and split oversized helpers into smaller tested units',
          'Adopted standalone components, signals, typed forms and Angular TestBed across the codebase',
          'Added Sentry reporting, safer network handling, pipeline updates and local API mocks',
        ],
      },
      {
        kind: 'callout',
        title: 'What three years changed',
        text: 'Autocom taught me how to own a product over time: balancing immediate dealer needs with the quieter architectural work that keeps the next feature affordable. It is the project where I learned to make large changes through small, reviewable steps.',
      },
    ],
  },
  {
    id: '7',
    slug: 'image-bingo',
    name: 'Image Bingo',
    description: 'A local two-team party game built around your own pictures.',
    thumbnail: {
      src: '/assets/images/image-bingo/round-gameplay.png',
      alt: 'Image Bingo round with a numbered grid over a landscape photograph',
    },
    logo: { src: '/assets/images/image-bingo/favicon.svg', alt: 'Image Bingo logo' },
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Angular CDK'],
    category: 'Side quest',
    year: 2026,
    liveUrl: 'https://image-bingo.klesiewicz.dev',
    contribution:
      'I designed and built the browser-based game, from deck setup and grid editing to scoring and results.',
    outcome:
      'The finished game runs entirely in the browser, keeping players’ images private and requiring no account or server.',
    story: [
      {
        kind: 'paragraph',
        text: 'Image Bingo is a local party game for two teams. A game master builds a deck from personal pictures, places a numbered 10 × 10 grid over each image and marks the cells that should score.',
      },
      {
        kind: 'media',
        media: {
          src: '/assets/images/image-bingo/game-setup.png',
          alt: 'Image Bingo setup screen for arranging rounds and marking winning cells',
        },
      },
      {
        kind: 'paragraph',
        text: 'During each round, the teams take turns choosing cells before both sets of guesses are locked. A timed reveal uncovers the picture, scores every correct cell and carries the match into the next round.',
      },
      {
        kind: 'features',
        items: [
          'Multi-image decks with a separate movable and resizable grid for every round',
          'Configurable team names and guesses per team',
          'Alternating turns, locked guesses and a timed image reveal',
          'Per-cell scoring with hits, misses and unguessed answers',
          'Keyboard-accessible grid and deck controls',
          'Replay using the same deck and game configuration',
        ],
      },
      {
        kind: 'media',
        media: {
          src: '/assets/images/image-bingo/final-results.png',
          alt: 'Image Bingo results screen showing the final score and round recap',
        },
      },
      {
        kind: 'callout',
        title: 'Private by design',
        text: 'Pictures remain in the current browser session as temporary object URLs. Nothing is uploaded, and the game needs no backend or account.',
      },
    ],
  },
  {
    id: '6',
    slug: 'dashtab',
    name: 'Dashtab',
    description: 'A calm personal dashboard that turns every new Chrome tab into a useful daily overview.',
    thumbnail: {
      src: '/assets/images/dashtab/dashtab-preview.jpg',
      alt: 'Dashtab dashboard with a clock, personal greeting, wellness tools and weather',
    },
    logo: { src: '/assets/images/dashtab/favicon.svg', alt: 'Dashtab logo' },
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Chrome Manifest V3'],
    category: 'Side quest',
    year: 2025,
    liveUrl: 'https://github.com/MarcKlesiewicz/Dashtab',
    contribution: 'I designed and built the extension as a focused home for the small routines that shape my day.',
    outcome: 'The new-tab experience brings time, focus, movement, hydration and weather into one calm view.',
    story: [
      {
        kind: 'paragraph',
        text: 'Dashtab is a personal Chrome extension that replaces the default new-tab page with an at-a-glance dashboard. It is designed to make the information and routines I need throughout the day immediately available without opening another app.',
      },
      {
        kind: 'features',
        items: [
          'Large clock and personal greeting',
          'Focus timer with a dedicated focus mode',
          'Movement reminder for sitting and standing intervals',
          'Water intake barometer with daily pacing',
          'Weather widget using the current location',
        ],
      },
      {
        kind: 'callout',
        title: 'Built for daily rhythm',
        text: 'Each tool stays visible but unobtrusive, keeping the dashboard useful whenever a new tab opens.',
      },
    ],
  },
  {
    id: '1',
    slug: 'monto',
    name: 'Monto',
    description: 'A mobile and web rental platform built with Flutter.',
    thumbnail: { src: '/assets/images/monto/monto_phones.png', alt: 'Monto mobile application screens' },
    logo: { src: '/assets/images/monto/monto_logo.jpg', alt: 'Monto logo' },
    technologies: ['Flutter', 'Dart', 'Riverpod', 'MongoDB', 'GraphQL'],
    category: 'Professional work',
    year: 2022,
    liveUrl: 'https://monto-rent.com',
    contribution: 'I implemented large and small parts of the Flutter frontend and later led work on its web version.',
    outcome: 'The work established my direction in cross-platform application development.',
    story: [
      {
        kind: 'paragraph',
        text: 'As part of my computer science AP degree, I collaborated with the app agency LittleGiants to develop Monto for one of its clients.',
      },
      {
        kind: 'paragraph',
        text: 'Monto is a Danish rental platform where private individuals and businesses can rent out everyday items in their local area.',
      },
      {
        kind: 'features',
        items: [
          'Rental item management and image upload',
          'Rental calendars and bulk discounts',
          'Keyword, category and geographic filtering',
          'Rental agreement management',
          'One-to-one live chat',
          'Reviews and ratings',
          'Administrative category, reporting and statistics tools',
        ],
      },
      { kind: 'media', media: { src: '/assets/images/monto/monto.jpg', alt: 'Monto web application overview' } },
      {
        kind: 'paragraph',
        text: 'My role was to implement the Flutter frontend. It was my first cross-platform project and gave me responsibility across both large and small product areas.',
      },
      {
        kind: 'paragraph',
        text: 'The assignment developed my understanding of component architecture, mobile interface practice and real product delivery. About a year later I returned to implement the web version and served as lead developer for a period.',
      },
    ],
  },
  {
    id: '2',
    slug: 'up-n-down',
    name: `Up N' Down`,
    description: 'A Flutter golf exercise and training application.',
    thumbnail: { src: '/assets/images/und/und_phones.png', alt: "Up N' Down application screens" },
    logo: { src: '/assets/images/und/und_logo.jpg', alt: "Up N' Down logo" },
    technologies: ['Flutter', 'Dart', 'Riverpod', 'MongoDB', 'GraphQL'],
    category: 'Professional work',
    year: 2022,
    liveUrl: 'https://upndown.dk',
    contribution: 'I implemented the supplied design against an existing GraphQL backend.',
    outcome: 'The frontend reached roughly 95% completion during the first month.',
    story: [
      {
        kind: 'paragraph',
        text: "Up N' Down was one of my first assignments as a newly hired frontend developer. The client wanted a platform that helped golfers improve and discover new exercises.",
      },
      {
        kind: 'paragraph',
        text: 'The application uses golf-related input to recommend exercises and tips. Visitors can also browse more than 50 video exercises with step-by-step guidance.',
      },
      {
        kind: 'features',
        items: [
          'Onboarding with golf-related input',
          'A custom exercise video player',
          'Likes, saved exercises and challenges',
          'Administrative reporting and exercise-upload tools',
        ],
      },
      {
        kind: 'media',
        media: { src: '/assets/images/und/und_screens.jpg', alt: "Up N' Down application screen collection" },
      },
      {
        kind: 'paragraph',
        text: 'Working from the client’s design and an existing GraphQL backend, I built the frontend in a linear delivery process that reached roughly 95% completion during the first month.',
      },
    ],
  },
  {
    id: '3',
    slug: 'myepi',
    name: 'MyEpi',
    description: 'Seizure tracking and Apple Watch detection support.',
    thumbnail: { src: '/assets/images/myepi/epi_home.jpg', alt: 'MyEpi mobile application home screen' },
    logo: { src: '/assets/images/myepi/epi_logo.jpg', alt: 'MyEpi logo' },
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Firebase'],
    category: 'Professional work',
    year: 2023,
    liveUrl: 'https://www.myepi.dk/',
    contribution: 'I refined the interface, implemented periodic PDF generation and restructured state management.',
    outcome:
      'The product gained a more consistent interface, exportable seizure documentation and a cleaner Riverpod architecture.',
    story: [
      {
        kind: 'paragraph',
        text: 'MyEpi is intended to make life safer for people living with epilepsy. I joined after its MVP phase to help move the existing application forward.',
      },
      { kind: 'heading', text: 'Mobile application' },
      {
        kind: 'paragraph',
        text: 'Patients can record seizures and follow community updates, while family members can receive the time and location of a seizure registered by an Apple Watch.',
      },
      { kind: 'heading', text: 'Watch application' },
      {
        kind: 'paragraph',
        text: 'The watch application uses built-in sensor technology to detect seizure-characteristic movement and send alerts to family members.',
      },
      {
        kind: 'features',
        items: [
          'Apple Watch seizure detection',
          'Family notifications through notification or SMS',
          'Automatic and manual seizure history',
          'Periodic PDF documentation',
        ],
      },
      {
        kind: 'media',
        media: { src: '/assets/images/myepi/epi_screens.jpg', alt: 'MyEpi application screen collection' },
      },
      {
        kind: 'paragraph',
        text: 'I fine-tuned much of the interface to a new design, implemented periodic PDF generation, removed redundant code and restructured state management with Riverpod.',
      },
    ],
  },
  {
    id: '4',
    slug: 'selvhent',
    name: 'Selvhent',
    description: 'A digital parcel-shop management system.',
    thumbnail: { src: '/assets/images/selvhent/selvhent_customer.jpg', alt: 'Selvhent customer kiosk' },
    logo: { src: '/assets/images/selvhent/selvhent_logo.jpg', alt: 'Selvhent logo' },
    technologies: ['Flutter', 'Dart', 'Riverpod', 'MongoDB', 'GraphQL'],
    category: 'Professional work',
    year: 2022,
    liveUrl: 'https://selvhent.com/',
    contribution: 'I implemented the web administration application and pickup-request handling in the warehouse unit.',
    outcome: 'The delivered tools connected parcel-shop administration with day-to-day warehouse pickup handling.',
    story: [
      {
        kind: 'paragraph',
        text: 'Selvhent is a digital warehouse-management system for parcel shops, designed to simplify storage, retrieval and the handling of unclaimed packages.',
      },
      {
        kind: 'paragraph',
        text: 'The product combines a customer kiosk for package information with a tablet-based warehouse unit that tracks package locations.',
      },
      {
        kind: 'features',
        items: [
          'Package inventory visibility for employees',
          'Customer input for couriers, package numbers and bulk pickups',
          'Administration of shops, couriers and their connections',
        ],
      },
      {
        kind: 'media',
        media: { src: '/assets/images/selvhent/selvhent_employee.jpg', alt: 'Selvhent warehouse application in use' },
      },
      {
        kind: 'paragraph',
        text: 'My role was to implement the Flutter web administration application and handle pickup requests in the warehouse unit.',
      },
    ],
  },
  {
    id: '5',
    slug: 'mealbuilder',
    name: 'Mealbuilder',
    description: 'Recipe planning with detailed nutrition information.',
    thumbnail: { src: '/assets/images/mealbuilder/mealbuilder_screens.jpg', alt: 'Mealbuilder application screens' },
    logo: { src: '/assets/images/mealbuilder/mealbuilder_logo.jpg', alt: 'Mealbuilder logo' },
    technologies: ['Flutter', 'Dart', 'Swagger', 'Material Design'],
    category: 'Professional work',
    year: 2023,
    story: [
      {
        kind: 'paragraph',
        text: 'Mealbuilder helps users control calorie intake and nutrient distribution while providing recipes for quick meals.',
      },
      {
        kind: 'paragraph',
        text: 'Recipes can be customized to match personal preferences, calorie targets and macronutrient goals.',
      },
      {
        kind: 'features',
        items: [
          'Recipes tailored to personal preferences',
          'Meal planning around individual calorie targets',
          'Macronutrient and detailed nutrition breakdowns',
        ],
      },
      {
        kind: 'callout',
        title: 'Product focus',
        text: 'Make detailed nutrition information useful without slowing down everyday meal planning.',
      },
    ],
  },
];

export function getWorkBySlug(slug: string | null): WorkItem | undefined {
  return WORK_ITEMS.find((item) => item.slug === slug);
}
