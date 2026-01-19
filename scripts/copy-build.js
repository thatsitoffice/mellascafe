const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), '.vercel', 'output', 'static');
const destDir = path.join(process.cwd(), 'dist');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`❌ Source directory ${src} does not exist`);
    console.error('Make sure @cloudflare/next-on-pages completed successfully.');
    process.exit(1);
  }

  // Remove existing dist directory to avoid conflicts
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  fs.mkdirSync(dest, { recursive: true });

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
  console.log('📦 Copying build output to dist/...');
  copyDir(sourceDir, destDir);
  console.log('✅ Build output successfully copied to dist/');
} catch (error) {
  console.error('❌ Error copying build output:', error.message);
  process.exit(1);
}
