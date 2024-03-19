# How This Site is Made

Mar 16, 2024

I provide this page here in case you are wondering how this site is made. It's
fairly simple, but requires some explanation.

I'm a web developer by trade, but I think much of the industry has fallen victim
to overkill, over-engineering, and bloat. I don't want to learn another
framework. I don't want to figure out another templating system. I don't want to
fiddle around with a static site generator. Don't get me wrong, some of the
stuff out there is great, but at the end of the day, this site just has to
display requested content and allow me to update it quickly and regularly.

Currently, all content on this site is static. The blog articles are written in
markdown. The pages are written in plain HTML. I use Tailwind for styling
because it's just that easy. There's a small build script that produces the
functioning site, which currently is hosted by [GitHub
Pages](https://pages.github.com/).

## Blog Posts

Posts are written in markdown and converted to HTML with
[marked](https://www.npmjs.com/package/marked). The conversion is part of the
build process and the rendered HTML files get placed in `docs/blog`.

I use a simple [template
page](https://github.com/LukeGeneva/lukegeneva.dev/blob/master/blog-page.template.html)
where each blog post is fed into. What's nice about this is that, by wrapping
the template page in a `blog-page` CSS class, I can easily target the rendered
blog post HTML for styling like so:

```css
.blog-page h1 {
    @apply text-4xl font-bold py-2;
}

.blog-page h2 {
    @apply text-2xl font-bold py-2;
}

.blog-page a {
    @apply text-blue-500;
}
```

## Build Script

The build script is very simple. This is it in its entirety:

```sh
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
```

It is basically five steps:

1. Clean the `docs` directory in preparation for file changes.
2. Copy public files.
3. Run a small script that runs all blog posts through `marked` and puts the
   resulting HTML in the `docs` directory.
4. Run Tailwind.
5. Copy `highlight.js` styles into `docs`. This is a nice package for displaying
   syntax-highlighted code blocks.
