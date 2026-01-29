import index from './index.html';
import drops from './drops.html';
import rigs from './rigs.html';
import notFound from './404.html';

const server = Bun.serve({
  routes: {
    '/': index,
    '/drops': drops,
    '/rigs': rigs,
    '/*': notFound,
  },
});

console.log(`Listening on ${server.url}`);
