const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), '.vercel', 'output', 'static');
const destDir = path.join(process.cwd(), 'dist');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory ${src} does not exist`);
    process.exit(1);
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyDir(sourceDir, destDir);
  console.log('✓ Build output copied to dist/');
} catch (error) {
  console.error('Error copying build output:', error);
  process.exit(1);
}
