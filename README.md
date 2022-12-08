# Moody Tracker

For fun. Recruitments can be fun, right?

## Usage

For iOS make sure you have `XCode.app` installed.
For Android make sure you have Android Studio installed and at least one Android Virtual Device configured.

1. Clone the repository.
2. Run `yarn`.
3. (optionally) Go to `iOS` and run `pod install`.
   - this step is optional, because should be already done by `yarn`, but I needed to do it manually
4. Run `yarn ios` / `yarn android`.

### E2E Tests

> Because of different Android configurations being available on different computers, I went with supporting E2e tests on iOS only.

Make sure you have `iPhone 12` emulator installed in `XCode.app` with `xcrun simctl list devicetypes | grep "iPhone 12"`.

1. Install [Detox Prerequisites](https://wix.github.io/Detox/docs/introduction/getting-started#detox-prerequisites) (mind the `applesimutils`).
2. Build the app for testing with `detox build --configuration ios.sim.debug`.
3. Run `yarn test:e2e`.

## Developoment notes

### RN 0.69

I had issues installing RN v0.70 Pod on my machine, so I went with 0.69 that runs flawlessly (had troubles with `hermes-engine` that became default in 0.70).

### Project structure

Project is organised around `screen`s (`Home` and `Entry`) and that's where nearly all of the Front-end is.

Components are tightly coupled and lie next to where they are used. If the components are shared between `screen`s, they live in `src/shared`. The same goes for `hooks`.

> While I usually don't like that kind of architecture, for such a small app it felt right to use it.

### Design choices

In the Data Entry part I tried to mimic what is in the actual product. That's why it redirects to new page where we can select the _mood level_ and _feelings_. I've tried to make it look like the Stats part and I feel it's pretty consistent, but I'll leave the last judgement to you.

Regarding the width of the Stats bars - I went with the Box at the end of the bar **not covering** it but rather being **appended** after it. This is because at some point (probably pretty far from now), the whole _blue_ part of the bar could be covered by the Box. This is an edge case and maybe it doesn't matter now, but I imagined myself talking to the designer about this case and settling on this way of solving the issue. This can be easily reverted though.

### Styles

You probably noticed that StyleSheets are kept in separate `styles.ts` and `getStyles.ts` files. Why there are two kinds?

- `styles.ts` means that the stylesheet is static. Imported and that's it.
- `getStyles.ts` have small logic and need the parameter to be passed. Think: _dynamic styles_.

Why not `styled-components`? It wasn't worth the hassle in such small demo IMO.

### `@reduxjs-toolkit`?

I was going to use `redux` in an ordinary way at first, but I never played with the `toolkit` so I've used it instead.

### Tests

Tests weren't a part of the assignment, however it felt incomplete without them. I went with E2E tests using `detox` because:

1. We were discussing it on our first call.
2. Unit tests are _less important_ IMO ([Write tests. Not too many. Mostly integration](https://kentcdodds.com/blog/write-tests)). Well, we don't have integration, but we have E2Es that should cover integration.

If I had more time, I'd unit test `hooks` and `utils/mapMoodEntriesToMoodChartData` - the latter is pretty advanced IMO. I hope the E2Es suffice to cover them as well (the end result depends one them anyway).

## License

NONE
