# Rock Paper Scissors

description: OOPin' Through Christmas - Advent of Code 2022 - Day 2 - Rock Paper Scissors

Mar 27, 2024

[https://adventofcode.com/2022/day/2](https://adventofcode.com/2022/day/2)

## Part One

Any time a game is mentioned, it's pretty tempting to create a `Game` class.
Here, though, I would say what we're really being asked to implement is a
`StrategyGuide` so let's at least start there.

What we're given as input is the strategy guide represented as text.

```
A Y
B X
C Z
```

The input is mapped like so:

```
A = Rock
B = Paper
C = Scissors
X = Rock
Y = Paper
Z = Scissors
```

The puzzle tells us that the strategy guide should predict and recommend plays
based on the input, with the first character representing the shape our opponent
is expected to play, and the second character representing the shape we should
play.

The scoring system is interesting, as we get point based not only on the outcome
(win/loss/draw), but also the shape we played in that round.

The shapes are scored as follows:

```
Rock: 1
Paper: 2
Scissors: 3
```

And the outcomes are scored as follows:

```
Loss: 0
Draw: 3
Win: 6
```

Our strategy guide needs to parse the incoming text, so let's start with a test
to ensure that is handled correctly.

### Testing the Strategy Guide

Let's put down a test file with some initial setup.

```typescript
import { expect, test } from 'bun:test';
import { StrategyGuide } from './StrategyGuide';

// rock paper
// paper rock
// scissors scissors

const TEXT = `A Y
B X
C Z`;

test('that strategy guide is parsed', () => {
    // test
});
```

Here we've put down the example text we can use and an initial shell of test
that we'll use to test that the strategy guide is parsed correctly.

We want the strategy guide to parse the text, so let's put that down quite
literally.

```typescript
test('that strategy guide is parsed', () => {
    const guide = StrategyGuide.fromText(TEXT);
});
```

We haven't implemented `StrategyGuide` yet, but that's okay. Let's get the test
fleshed out and make sure it makes sense from a readability standpoint before we
worry about that.

It might be good if the `StrategyGuide` kept track of the rounds in some sort of
collection, so let's put that down as well as something we expect.

```typescript
test('that strategy guide is parsed', () => {
    const guide = StrategyGuide.fromText(TEXT);
    expect(guide.rounds.length).toBe(3);
});
```

Now we have our first assertion. We `expect` there to be three rounds parsed.
Here might be a good spot to start out implementation of `StrategyGuide`.

```typescript
export class StrategyGuide {
    public rounds = [];

    static fromText = (text: string) => {};
}
```

Here we've declared two things that our assertion needs: A `fromText` static
method and a public array called `rounds`.

We are now able to run our test suite and see that there's failing test.

```shell
src/day2/StrategyGuide.test.ts:
 9 | B X
10 | C Z`;
11 |
12 | test('that strategy guide is parsed', () => {
13 |   const guide = StrategyGuide.fromText(TEXT);
14 |   expect(guide.rounds.length).toBe(3);
              ^
TypeError: undefined is not an object (evaluating 'guide.rounds')
✗ that strategy guide is parsed [0.23ms]
```

Let's write a simple implementation that makes the test pass. But wait, what
exactly _is_ our `rounds` array? A string? An object? Well, we see the word
"round" appear throughout the problem text, so maybe this should be another
class. Let's go with that for now. Remember, it's not that `class` is any better
from a code standpoint, but typically, this is better from a domain language
standpoint. It gives us a clear term to use and everyone, from developers to
domain experts knows what it is. Unnamed concepts in code take more explanation
and cognitive overhead than named counterparts.

```typescript
// src/day2/Round.ts
export class Round {
    constructor() {}
}
```

This gives us a starting point and now we can think about what the inputs are.
