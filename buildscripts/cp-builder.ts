import { execSync } from 'child_process';
import * as path from 'path';

const buildApp = () => {
  try {
    const appPath = path.resolve(__dirname, '..');
    console.log(`Building from: ${appPath}`);

    execSync('yarn build-main && yarn build-renderer', {
      stdio: 'inherit',
      cwd: appPath,
    });

    console.log('Build process complete!');
  } catch (error) {
    console.error('Error during build process:', error);
    process.exit(1);
  }
};

buildApp();
