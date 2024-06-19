# Utility CSS

CSS part of Tailwind CSS written in SCSS

## How to use

- with unpkg

  copy the following code into the head tag of your html file:

  ```html
  <link
    rel="stylesheet"
    href="https://unpkg.com/@hackingzhang/utility-css@0.1.1/src/css/preflight.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/@hackingzhang/utility-css@0.1.1/dist/utility-css.full.min.css"
  />
  ```

- self host

  copy `/src/css/preflight.css` and css files under `/dist` to your project, then import it manualy.

## Baisc build and full build version

Full build version contains all utilities, the size is about 508KB after compressed.

Basic build version is about 112KB after compressed, and does not includes the following utilities:

- all accessibility utilities
- all color palette related utilities

  Utilities like text-slant-\* or bg-yellow-\* is not included, but text-current, bg-white is. Generally, these color values are included in basic build: inherit, currentColor, transparent, black(#000) and white(#fff).

- font-variant-numeric utilities
- hyphens utilities
- aspect-ratio utilities
- break utilities
- box-decoration-break utilities
- isolation utilities
- accent-color utilities
- caret-color utilities
- pointer-evnets utilities
- resize utilities
- scroll-margin utilities
- scroll-padding utilities
- scroll-snap-\* utilities
- mix-blend utilities
- background-blend utilities
- outline utilities
- gradient utilities
