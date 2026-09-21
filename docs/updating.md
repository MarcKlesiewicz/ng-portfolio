# Updating dependencies

Use the Node and npm versions declared in `package.json`.

```sh
npm outdated
npm install <package>@<version>
npm install --save-dev <package>@<version>
```

Commit both `package.json` and `package-lock.json`. Use `npm ci` to verify the exact locked dependency tree before handing off a change.

For Angular major upgrades, follow the [Angular Update Guide](https://angular.dev/update-guide) and update one major at a time. Keep Angular framework packages aligned, keep TypeScript within Angular's documented compatibility range, and run the migration schematics at each boundary.

After any dependency change, run:

```sh
npm test
npm run test:coverage
npm run lint
npm run format:check
npm run build
```

Do not use `npm audit fix --force`; review findings and apply compatible package upgrades deliberately.
