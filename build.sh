echo "Cleaning build directory...";
rm -rf build/*;

echo "Copying public files...";
cp -R ./public/* ./build;

echo "Building blog pages...";
bun scripts/build-blog-pages.ts ./blog/*.md;

echo "Generating Tailwind styles...";
bun run tailwind;

echo "Done!";
