# OOPin' Through Christmas

description: An overview of using test-driven development and object-oriented programming to solve Advent of Code problems.

Mar 24, 2024

You may be familiar with [Advent of Code](https://adventofcode.com/). If not,
you should try it out. It's a lot of fun and provides some great exercises to
work through.

What I want to do in this series of articles is illustrate some usages of
object-oriented, test-driven development, and expressive domain code. For each
problem, we'll treat the problem text as a business domain, and name our classes
accordingly. We'll also use tests to shape and direct the implementation of some
object-oriented code.

## Why OOP? Don't You Know About "X"?

Yes, unfortunately I'm aware of the negative connotations floating around online
about object-oriented programming these days. It's my firmly-held belief that
there's not enough nuance in those discussions. Each paradigm is useful and it
would be best for us to be able to mix and match those to suit the problem at
hand.

In general, I believe object-oriented programming is a great fit for domain
programming, not because it models "real world" objects, but because it models
the business language, or the "Ubiquitous Language" as Eric Adams writes about
in [Domain Driven Design](https://amzn.to/4a9sJKG).

If you're unfamiliar with Advent of Code, each problem has two parts. The second
part becomes available only after solving the first. What I hope to illustrate
is the ease with which the second part can be solved by utilizing these methods.
Sometimes the second part switches things up quite a bit, which is okay. In
practice, many of our business requirements can change quite drastically.

## Thanks For Reading!

I will continue to publish these as time allows. I hope that readers can get
something positive out of all this. If you have questions or comments, please
open an issue in [this
repository](https://github.com/LukeGeneva/l8a.dev/issues) on GitHub.

Please note that the solutions here may seem a bit pedantic or overkill, but I
don't necessarily think they are over-engineered. The goal is not to present the
best algorithm to solve each problem, although we will keep efficiency in mind.
The goal is to illustrate how test-driven development and good object-oriented
principles can result in code that is easy to understand, change, and discuss
with teammates and stakeholders.

Thank you all!

**NOTE:** After going through a couple of these, I think the better approach is
to provide my implementation and write some detailed commentary explaining the
code and discussing what went into the decision-making. I think this is much
easier to follow than a step-by-step illustration, and is also more manageable
from a writing standpoint, as the alternative takes up an exorbitant amount of
time.

## 2022

-   [Day 1: Calorie Counting](/blog/otc-2022-day1-calorie-counting.html)
