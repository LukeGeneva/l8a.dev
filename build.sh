echo "Cleaning docs directory...";
rm -rf docs/*;

echo "Copying public files...";
cp -R ./public/* ./docs;

echo "Building blog pages...";
bun scripts/build-blog-pages.ts ./blog/*.md;

echo "Generating Tailwind styles...";
bun run tailwind;

echo "Copying code highlight styles...";
cp ./node_modules/highlight.js/styles/default.css ./docs/highlight.css;

echo "Done!";
