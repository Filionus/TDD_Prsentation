# TDD demo and exercise

Needs Node.js 20 or newer.

```
npm install
npm test        # exercise: starts RED on purpose (one failing test)
npm run demo    # final state of the demo (all green)
```

## Demo: cheddar maturity labels

One folder per phase of the red-green-refactor cycle. Run one folder at a time:

```
npx vitest run demo/01-red
npx vitest run demo/02-green-fake
npx vitest run demo/03-red-more-tests
npx vitest run demo/04-green-real
npx vitest run demo/05-refactor
npx vitest run demo/06-test-double
```

| Folder | Phase | What happens |
| --- | --- | --- |
| 01-red | RED | First test, empty stub: fails with an assertion error |
| 02-green-fake | GREEN | Simplest possible code: hard-coded `'mild'` |
| 03-red-more-tests | RED | More examples, the fake no longer works |
| 04-green-real | GREEN | Real logic with if-statements |
| 05-refactor | REFACTOR | Data table instead of branches, tests unchanged |
| 06-test-double | next loop | Input validation and a stubbed clock |

The age thresholds are a simplified scheme. Producers use different cut-offs for mild, medium, mature, extra mature and vintage.

## Exercise: a greeting function

You work on your own. Ask your neighbour if you get stuck. The rule of the game: never write code without a failing test first.

Everything happens in the folder `exercise/`:

1. **RED.** Run `npm test`. One test fails. Read the failure message.
2. **GREEN.** Open `exercise/greeting.js` and make the test pass. One line is enough.
3. **RED, then GREEN.** Write your own test in `exercise/greeting.test.js`: `greet('')` should return `'Hello, stranger!'`. Run `npm test` and watch it fail. Then change `greet` so that both tests pass.
4. **Bonus and REFACTOR.** Test first: `greet('  Anna  ')` should return `'Hello, Anna!'`. Then tidy up the code. All tests stay green.

Stuck? Open `exercise/HINTS.md`, one hint at a time. The last resort is the finished solution in `exercise-solution/` (run it with `npm run solution`).
