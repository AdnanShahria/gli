const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'backend', 'functions');
const destDir = path.join(__dirname, 'functions');

if (fs.existsSync(sourceDir)) {
  try {
    if (fs.existsSync(destDir)) {
      const stats = fs.lstatSync(destDir);
      if (stats.isSymbolicLink() || stats.isDirectory()) {
        fs.rmSync(destDir, { recursive: true, force: true });
      }
    }
    
    // Use a junction/symlink for live-reloading during dev
    try {
      fs.symlinkSync(sourceDir, destDir, 'junction');
      console.log('Successfully symlinked "backend/functions" to "functions" for live dev/build.');
    } catch (symErr) {
      // Fallback to copy if symlink fails
      fs.cpSync(sourceDir, destDir, { recursive: true });
      console.log('Successfully copied "backend/functions" to "functions" for Cloudflare Pages.');
    }
  } catch (err) {
    console.error('Error preparing functions directory:', err.message);
  }
} else {
  console.log('No backend/functions directory found. Skipping.');
}
