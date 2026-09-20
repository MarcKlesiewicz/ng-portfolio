import { WorkItem } from '../models/work-item.model';

export const WORK_ITEMS: readonly WorkItem[] = [
  {
    id: '1',
    slug: 'monto',
    name: 'Monto',
    description: 'A mobile and web rental platform built with Flutter.',
    thumbnail: { src: '/assets/images/monto/monto_phones.png', alt: 'Monto mobile application screens' },
    logo: { src: '/assets/images/monto/monto_logo.jpg', alt: 'Monto logo' },
    technologies: ['Flutter', 'Dart', 'Riverpod', 'MongoDB', 'GraphQL'],
    category: 'Client work',
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
    category: 'Client work',
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
    category: 'Client work',
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
    category: 'Client work',
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
    category: 'Client work',
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
