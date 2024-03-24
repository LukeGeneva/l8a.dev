const fs = require('fs');
const path = require('path');
const { Marked } = require('marked');
const { markedHighlight } = require('marked-highlight');
const hljs = require('highlight.js');

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  }),
);

async function main() {
  const filepaths = fs
    .readdirSync('./blog')
    .map((file) => path.join('./blog/', file));
  const template = fs.readFileSync('./blog-page.template.html', 'utf-8');

  for (let fp of filepaths) {
    const markdown = fs.readFileSync(fp, 'utf-8');
    const content = await marked.parse(markdown);
    const html = template.replace('{{content}}', content);
    const htmlFilename = path.basename(fp).replace('.md', '.html');
    fs.writeFileSync(`./docs/blog/${htmlFilename}`, html);
    console.log(`Built ${htmlFilename}`);
  }
}

main();
