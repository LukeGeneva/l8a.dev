# You May Be Ignoring a Key Tailwind Feature

description: No more messy markup.

Oct 10, 2024

There is more than a fair bit of talk about Tailwind on the internet. Most of it
isn't great and the one thing that seems common throughout is that the opinions
are strongly held, whatever they may be.

If you want my opinion, I'll say I think Tailwind is great. It speeds up my
workflow quite a bit. If you want me to say something I don't like about it,
that's okay too. I'll say I don't like that it adds a build step. It adds just
that extra bit of complexity.

It's really no matter. We can choose to use it or not.

One common complaint that I see though, that I believe to be misguided is that
it muddies up markup. That may be true, but only if we're not using Tailwind to
its full potential. Most of these complaints seem to completely be missing the
`@apply` directive. It's a great feature, and, judging by the examples I see
online, is one that is drastically under-used.

The `@apply` directive allows us to use Tailwind's utility classes within our
own custom CSS classes. With it, we are able to group multiple utility classes
under one CSS rule, like so:

## Long Version

```html
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
```

## Shortened with `@apply`

```css
.btn {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
```

```html
<button class="btn">Click Me</button>
```

It's important to note that we don't lose any customization ability here.
Cascading styles continue to work the same whether we use `@apply` or not.

```html
<button class="btn text-lg">Click Me</button>
```

Tailwind isn't a completely different way writing CSS. It's a shortcut, or a
toolkit. If CSS is a screwdriver, Tailwind is a drill. Some treat it like a
hammer.
