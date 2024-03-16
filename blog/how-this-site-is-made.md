# How This Site is Made

I provide this page here in case you are wondering how this site is made. It's
fairly simple, but requires some explanation.

I'm a web developer by trade, but I've grown pretty tired of the overkill,
over-engineering, call it what you will that's out there. I don't want to learn
another framework. I don't want to figure out another templating system. I don't
want to fiddle around with a static site generator. Don't get me wrong, some of
the stuff out there is great, but at the end of the day, this site just has to
display requested content.

It's all static content. The blog articles are written in markdown. The pages
are written in plain HTML. I use Tailwind for styling because it's just that
easy. There's a small build process that produces the functioning site, which
currently is hosted by [GitHub Pages](https://pages.github.com/).

## Blog Posts

I write them in markdown and convert them to HTML with
[marked](https://www.npmjs.com/package/marked). The conversion is part of the
build process and the rendered HTML files get placed in `docs/blog`.
