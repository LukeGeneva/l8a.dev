const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const ROUTES: Record<string, string> = {
  "/": "src/index.html",
  "/blog": "src/blog.html",
  "/projects": "src/projects.html",
  "/projects/bomberman-js": "src/projects/bomberman-js.html",
};

const MIME_TYPES: Record<string, string> = {
  ".css": "text/css",
  ".html": "text/html",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript",
  ".png": "image/png",
  ".webp": "image/webp",
};

function mimeType(path: string): string {
  const dot = path.lastIndexOf(".");
  return dot >= 0 ? (MIME_TYPES[path.slice(dot)] ?? "application/octet-stream") : "application/octet-stream";
}

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const pathname = new URL(req.url).pathname;

    const htmlPath = ROUTES[pathname];
    if (htmlPath) {
      return new Response(Bun.file(htmlPath), {
        headers: { "Content-Type": "text/html" },
      });
    }

    const staticFile = Bun.file(`src${pathname}`);
    if (await staticFile.exists()) {
      return new Response(staticFile, {
        headers: { "Content-Type": mimeType(pathname) },
      });
    }

    return new Response(Bun.file("src/404.html"), {
      status: 404,
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Listening on http://localhost:${server.port}`);
