import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const filepaths = process.argv.slice(2);
const template = fs.readFileSync('./blog-page.template.html', 'utf-8');

for (let fp of filepaths) {
  const markdown = fs.readFileSync(fp, 'utf-8');
  const content = await marked.parse(markdown);
  const html = template.replace('{{content}}', content);
  const htmlFilename = path.basename(fp).replace('.md', '.html');
  fs.writeFileSync(`./build/${htmlFilename}`, html);
  console.log(`Built ${htmlFilename}`);
}
