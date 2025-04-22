const fs = require('fs');
const path = require('path');

const unusedComponents = [
  'accordion.tsx',
  'alert.tsx',
  'aspect-ratio.tsx',
  'avatar.tsx',
  'badge.tsx',
  'breadcrumb.tsx',
  'calendar.tsx',
  'carousel.tsx',
  'chart.tsx',
  'checkbox.tsx',
  'collapsible.tsx',
  'context-menu.tsx',
  'drawer.tsx',
  'dropdown-menu.tsx',
  'form.tsx',
  'hover-card.tsx',
  'input-otp.tsx',
  'label.tsx',
  'menubar.tsx',
  'navigation-menu.tsx',
  'pagination.tsx',
  'popover.tsx',
  'progress.tsx',
  'radio-group.tsx',
  'resizable.tsx',
  'scroll-area.tsx',
  'select.tsx',
  'skeleton.tsx',
  'slider.tsx',
  'switch.tsx',
  'table.tsx',
  'tabs.tsx',
  'textarea.tsx',
  'toggle.tsx',
  'toggle-group.tsx'
];

const componentsDir = path.join(process.cwd(), 'components', 'ui');

console.log('Starting removal of unused UI components...');

unusedComponents.forEach(component => {
  const filePath = path.join(componentsDir, component);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`✓ Removed: ${component}`);
    } else {
      console.log(`! Not found: ${component}`);
    }
  } catch (error) {
    console.error(`Error removing ${component}:`, error.message);
  }
});

console.log('\nComponent removal completed!');
console.log('Please run "pnpm install" to ensure all dependencies are properly resolved.'); 