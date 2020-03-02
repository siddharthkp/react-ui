## Next steps

.......... ... ..\\ .......... ....

Docs:

1. theme-provider
2. element
3. customisting tokens
4. variants and sizes
5. responsive syntax
6. utilities
7. credits
8. write document about using other libraries (react router, reach-ui)
9. built-in themes
10. redo customising docs

Theme:

1. rewrite light theme based on base
2. create a dark theme
3. add multiple scales of fontsizes to base theme as options (comments)

Docs website:

1. wrap customisation docs in base theme
2. homepage

Library:

1. remove basestyles in favor of merged css
2. show warning if themeprovider is missing ¹ ²
3. convert px to rem in theme
4. add css variables for theme tokens in dev mode
5. make controlled switch to avoid leaky abstraction
6. add warnings for pixel values
7. add bundlesize to library
8. find ways of making library smaller
9. move to styled-components
10. components: add data-focus for :focus and pass down data-focus from elements like link which can have focus ³

Demos:

1. make email app
2. make airbnb card
3. make skyscanner card
4. make twitter card

Notes:

¹ rust has great errors - https://github.com/sass/sass-spec/pull/1505/files
² look at less verbose errors by folding - https://mariusschulz.com/blog/advanced-javascript-logging-using-console-group
³ implementation: https://codesandbox.io/s/pseudo-class-sticker-sheet-5nwsu
