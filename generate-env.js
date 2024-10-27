const fs = require('fs');
const path = require('path');

// Define your environment variables here
const envVariables = `
export const env = {
  npm_package_version: '${process.env.npm_package_version || '1.0.0'}',
  // Add other environment variables here
};
`;

// Write the environment variables to .env.ts
const envFilePath = path.join(__dirname, 'src', 'environments', '.env.ts');
fs.writeFileSync(envFilePath, envVariables, { encoding: 'utf8' });

console.log(`Environment variables written to ${envFilePath}`);
