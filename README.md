# Moody Tracker

For fun. Recruitments can be fun, right?

## Usage

TBA

## Developoment notes

### Project structure

Project is organised around `screen`s (`Home` and `Entry`) and that's where nearly all of the Front-end is.

Components are tightly coupled and lie next to where they are used. If the components are shared between `screen`s, they live in `src/shared`. The same goes for `hooks`.

> While I usually don't like that kind of architecture, for such a small app it felt right to use it.

### Design choices

TBA

### Styles

You probably noticed that StyleSheets are kept in separate `styles.ts` and `getStyles.ts` files. Why there are two kinds?

    - `styles.ts` means that the stylesheet is static. Imported and that's it.
    - `getStyles.ts` have small logic and need the parameter to be passed. Think: _dynamic styles_.

Why not `styled-components`? It wasn't worth the hassle in such small demo IMO.

### `@reduxjs-toolkit`?

I was going to use `redux` in an ordinary way at first, but I never played with `toolkit` so I've used it instead.

## License

NONE
