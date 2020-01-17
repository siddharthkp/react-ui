## Done

- docs: make gatsby docs work again
- rollup build
- margin utility for all elements
- docs: goals and scope
- docs: tokens
- docs: usage
- docs: custom component recipes
- docs: creating new components
- build a switch component
- build text area
- build breadcrumbs
- build stack
- add id to form labels
- fix switch component
- add required to form labels
- add placeholder state for select
- move menu component to core
- build button component
- build spinner component
- build avatar component
- docs: debug why form prop types aren't working
- internal: rewrite components to extract colors
- internal: break up theme and colors
- internal: dark theme
- internal: allow usage of tokens inside theme file (especially user facing)
- replace css
- add responsiveness to interpolate
- warning if you use out of scale values

= designer work:

    - global ui object
    - ui for modifying in ui, floating
    - add styles back via themeprovider
    - add hook into global themeprovider
    - add new properties on the fly
    - change boxShadow to overlay like browser
    - add variant property

## Next steps

    - pluck out designer into it's own package
    - publish beta
    - finish documentation for all components
    - better warnings

= designer work:

    - activate on Ctrl
    - understand props
    - more like figma
    - handle datatypes
    - add inherit to all possible places?
    - add hovering _label_ like browser
    - design for nested keys: hover, focus, etc.
    - design for responsive properties
    - move global object to context
    - persist back to file, how? - local diff file + babel source map + replace

= warning work

    - interpolated flat scale for keys
    - better rust like errors - https://github.com/sass/sass-spec/pull/1505/files
    - less verbose errors - https://mariusschulz.com/blog/advanced-javascript-logging-using-console-group

- debug emotion warning
- make mail app
- make it easier to introduce scales

- minimal theme with no styles
- internal: add a darker gray than 900
- internal: allow background to be used as backgroundColor
- docs: document components
- component: switch hover and focus state
- component: input hover and focus states

- recipe: create variants https://theme-ui.com/components/variants
- recipe: styles based on props (maybe not)
- recipe: usage with reach-ui
- recipe: usage with react router

- docs: margin utilities
- docs: theme spec + opinions
- refactor base styles to merged css

- build more components?

### First 10 components

building blocks

- x form
- x input
- x label
- x switch
- x textarea
- x select
- x breadcrumbs
- x link
- x spinner
- x menu
- x button
- x avatar
- alert
- image (maybe not)
- radio (maybe later)
- icons (maybe not)

typography

- x heading
- paragraph

layout

- x grid
- x stack

## Big Ideas

- constraints based design
- unification on a format: object based css-in-js for the web
- constraints lead to better tools
- theming as a first class citizen
