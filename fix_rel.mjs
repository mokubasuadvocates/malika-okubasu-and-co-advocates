import fs from 'fs';
import path from 'path';

const files = [
  'src/app/publications/[slug]/page.tsx',
  'src/components/ArticleShareAction.tsx',
  'src/components/DesktopHeader.tsx',
  'src/components/FloatingWhatsAppButton.tsx',
  'src/components/Footer.tsx',
  'src/components/MobileHeader.tsx',
  'src/components/views/About.tsx',
  'src/components/views/BlogDetail.tsx',
  'src/components/views/Contact.tsx',
  'src/components/views/Home.tsx',
  'src/components/views/Team.tsx'
];

files.forEach(file => {
  const filePath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix 'SITE_NAME' unused in src/app/publications/[slug]/page.tsx
  if (file === 'src/app/publications/[slug]/page.tsx') {
    content = content.replace('OG_IMAGE_URL, SITE_NAME }', 'OG_IMAGE_URL }');
  }

  // A regex to find target="_blank" rel="noopener noreferrer" followed by another rel="..."
  // Actually, sometimes the second rel is on a new line.
  // The safest way is to look for rel="noopener noreferrer" and if it occurs twice within the same tag (between <a and >), remove one.
  // We can just use a simple string replacement for the most common pattern:
  content = content.replace(/target="_blank"\s+rel="noopener noreferrer"\s+rel="noopener noreferrer"/g, 'target="_blank" rel="noopener noreferrer"');
  
  // Also check for newlines
  content = content.replace(/target="_blank"\s+rel="noopener noreferrer"(\s*\n\s*)rel="noopener noreferrer"/g, 'target="_blank" rel="noopener noreferrer"');
  
  // Check for cases where target="_blank" is on one line, then rel is on next, etc.
  // Just use regex to match the anchor tag attributes and de-duplicate `rel="noopener noreferrer"`
  content = content.replace(/<a([^>]+)>/g, (match, attributes) => {
    let relCount = 0;
    const newAttributes = attributes.replace(/rel="noopener noreferrer"/g, (relMatch) => {
      relCount++;
      return relCount === 1 ? relMatch : '';
    });
    return `<a${newAttributes}>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${file}`);
});
