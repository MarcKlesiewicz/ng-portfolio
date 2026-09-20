# Unit and component tests

Angular CLI runs the suite with Vitest and jsdom.

```sh
npm test
npm run test:watch
npm run test:coverage
```

- Import test functions from `vitest`.
- Configure standalone subjects through `TestBed` imports and provider functions.
- Prefer native promises and Vitest fake timers; do not add ZoneJS test helpers.
- Cover user-visible behavior, route boundaries, signal changes, and timer cleanup.
- Keep tests deterministic and independent.
