# Hints

Try without hints first. Open one hint at a time.

## Step 2: make the first test pass

The function has to return a piece of text. In JavaScript you can glue text together with `+`, for example `'Hi ' + 'there'`.

One possible line:

```js
return 'Hello, ' + name + '!';
```

## Step 3: write your own test

Copy the existing test inside `exercise/greeting.test.js`, paste it below, and change two things: the name of the test and the input and expected text.

```js
it('greets a stranger when the name is empty', () => {
  expect(greet('')).toBe('Hello, stranger!');
});
```

Run `npm test`. The new test must fail first. A test you never saw fail proves nothing.

## Step 3: make it pass

You need a condition: if the name is empty, return a different text.

```js
if (name === '') {
  return 'Hello, stranger!';
}
```

Put it above the existing `return` line.

## Bonus: names with spaces

Test first: `greet('  Anna  ')` should return `'Hello, Anna!'`. The method `name.trim()` removes spaces at the start and the end of a text.

## Still stuck?

A finished solution is in the folder `exercise-solution`. Look at it only as a last resort.
