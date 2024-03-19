import fs from 'fs';
import path from 'path';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
);

const filepaths = process.argv.slice(2);
const template = fs.readFileSync('./blog-page.template.html', 'utf-8');
fs.mkdirSync('./docs/blog');

for (let fp of filepaths) {
  const markdown = fs.readFileSync(fp, 'utf-8');
  const content = await marked.parse(markdown);
  const html = template.replace('{{content}}', content);
  const htmlFilename = path.basename(fp).replace('.md', '.html');
  fs.writeFileSync(`./docs/blog/${htmlFilename}`, html);
  console.log(`Built ${htmlFilename}`);
}
