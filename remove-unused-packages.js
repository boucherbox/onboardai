const { execSync } = require('child_process');

const unusedPackages = [
  // Radix UI Components
  '@radix-ui/react-accordion',
  '@radix-ui/react-alert-dialog',
  '@radix-ui/react-aspect-ratio',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-collapsible',
  '@radix-ui/react-context-menu',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-menubar',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-popover',
  '@radix-ui/react-progress',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-slider',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toggle',
  '@radix-ui/react-toggle-group',
  
  // UI Libraries
  'embla-carousel-react',
  'react-day-picker',
  'recharts',
  'vaul',
  
  // Form Libraries
  '@hookform/resolvers',
  'react-hook-form',
  'zod',
  
  // Development Dependencies
  '@types/node',
  '@types/react',
  '@types/react-dom'
];

console.log('Starting removal of unused packages...');

// Remove packages in batches of 10 to avoid command line length limits
const batchSize = 10;
for (let i = 0; i < unusedPackages.length; i += batchSize) {
  const batch = unusedPackages.slice(i, i + batchSize);
  console.log(`Removing batch ${Math.floor(i/batchSize) + 1} of ${Math.ceil(unusedPackages.length/batchSize)}...`);
  console.log('Packages:', batch.join(', '));
  
  try {
    execSync(`pnpm remove ${batch.join(' ')}`, { stdio: 'inherit' });
    console.log('Batch removed successfully!');
  } catch (error) {
    console.error('Error removing batch:', error.message);
    console.log('Continuing with next batch...');
  }
}

console.log('Package removal completed!');
console.log('Please run "pnpm install" to ensure all dependencies are properly resolved.'); 