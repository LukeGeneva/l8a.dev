# Calorie Counting

Mar 25, 2024

[https://adventofcode.com/2022/day/1](https://adventofcode.com/2022/day/1)

## Part One

This problem is all about elves and how many Calories they are carrying in their
inventories. With that said, let's first set up a simple test that captures the
domain language and ensures we can add Calories to an elf's inventory. In a
business sense, we are primarily concerned with the total number of Calories, so
we'll capture that in the test.

Here is what our test code might look like:

```typescript
import { expect, test } from 'bun:test';
import { Elf } from './Elf';

test("that elf's inventory tracks Calories", () => {
    const elf = new Elf();
    elf.addToInventory(2000);
    elf.addToInventory(1000);
    expect(elf.totalCalories).toBe(3000);
});
```

In this test, we instantiate an `Elf` and add a couple of Calorie counts to
their inventory. At the end, we expect all of those Calories to be added up and
reported by the `totalCalories` property.

Now that that's done, we can implement our actual `Elf` class.

```typescript
export class Elf {
    private _totalCalories = 0;

    get totalCalories() {
        return this._totalCalories;
    }

    addToInventory = (calories: number) => {
        this._totalCalories += calories;
    };
}
```

Now we can see that the test passes:

```sh
bun test v1.0.8 (2a405f69)

src/day1/Elf.test.ts:
✓ that elf's inventory tracks Calories [0.06ms]

 1 pass
 0 fail
 1 expect() calls
Ran 1 tests across 1 files. [8.00ms]
```

This is great, but there's still a lot missing. We need to parse some input and
get a list of inventory-filled elves. For that, we can write a test using the
example input from the problem.

```typescript
import { expect, test } from 'bun:test';
import { parseInventoryList } from './parseInventoryList';

const TEXT = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

test('that list is created', () => {
    const elves = parseInventoryList(TEXT);
    expect(elves.length).toBe(5);
    expect(elves[0].totalCalories).toBe(6000);
    expect(elves[1].totalCalories).toBe(4000);
});
```

And from that, we can make a simple function that handles the input parsing.

```typescript
import { Elf } from './Elf';

export function parseInventoryList(text: string): Array<Elf> {
    const elves = new Array<Elf>();
    const elfInventories = text.split('\n\n');
    for (let inventory of elfInventories) {
        const elf = new Elf();
        inventory
            .split('\n')
            .map((n) => Number.parseInt(n, 10))
            .forEach(elf.addToInventory);
        elves.push(elf);
    }
    return elves;
}
```

Packaging up the code like this carries the benefit of leaving a very simple
script to solve the problem. For example, it could look something like this:

```typescript
const elves = parseInventoryList(input);
const maxCalorieElf = elves.reduce((max, curr) =>
    curr.totalCalories > max.totalCalories ? curr : max
);
console.log(maxCalorieElf.totalCalories);
```

Now, is this overkill? Yes. It's quite obvious that all we're being asked to do
in this problem is sum some numbers and determine a max, but what I hope to
illustrate is that, had this been more complex, we've laid a pretty good
foundation for understanding. When we look at the code snippet above, I think
it's pretty clear what is being done. In fact, we've left a little work that
could be done in this area. The `elves.reduce` call just doesn't read very well.
It's not immediately clear what it's doing. Let's clear that up by refactoring
that portion to a named function.

```typescript
const elves = parseInventoryList(input);
const elf = findElfWithMostCalories(elves);
console.log(elf.totalCalories);

function findElfWithMostCalories(elves: Array<Elf>) {
    return elves.reduce((max, curr) =>
        curr.totalCalories > max.totalCalories ? curr : max
    );
}
```

This reads much better. Even without reading the problem text, we can tell that
the goal of this code is:

1. Parse the input into a list of elves.
2. Find the elf with the most Calories.
3. Display that number.

## Part Two

Part two of the day 1 problem set is only a minor change. Rather than getting
the elf with the most Calories, we need to get the top three. This is a pretty
easy change. We can simply sort the list of elves by the Calorie counts in
descending order and then grab the first three elves from the array. Lucky for
us, there's no domain changes here.

```typescript
const elves = parseInventoryList(input);
const top3 = findTop3ElvesWithMostCalories(elves);
const total = sumElfCalories(top3);
console.log(total);

function findTop3ElvesWithMostCalories(elves: Array<Elf>) {
    return elves
        .sort((a, b) => (a.totalCalories < b.totalCalories ? 1 : -1))
        .slice(0, 3);
}

function sumElfCalories(elves: Array<Elf>) {
    return elves.reduce((sum, elf) => sum + elf.totalCalories, 0);
}
```
