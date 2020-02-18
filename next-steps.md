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
    - publish beta-6
    - designer: global ui object
    - designer: ui for modifying in ui, floating
    - designer: add styles back via themeprovider
    - designer: add hook into global themeprovider
    - designer: add new properties on the fly
    - designer: change boxShadow to overlay like browser
    - designer: add variant property
    - designer: pluck out designer into it's own package to explore later
    - docs: avatar
    - docs: breadcrumb
    - docs: button
    - docs: button-group
    - docs: input
    - docs: input-group
    - docs: form
    - docs: heading
    - docs: link
    - docs: menu
    - docs: select
    - docs: spinner
    - docs: switch
    - docs: text
    - docs: textarea
    - docs: grid
    - docs: stack
    - theme: add warning for units
    - component: image
    - text variant subtle not working, why?

## Next steps

    - cdocs: image
    - cdocs: card
    - cdocs: paragraph
    - cdocs: sidebar toggle
    - cdocs: theme-provider
    - cdocs: element
    - docs: copy code
    - docs: make example container resizable
    - dx: show warning if themeprovider is missing
    - docs: home page
    - docs: core concepts
    - docs: customisation
    - docs: Constraints based design
    - docs: Base Element
    - docs: Extending components
    - docs: Variants
    - docs: css prop
    - docs: margin utils

    - element: debug emotion warning
    - meta: make dist smaller
    - element: better warnings
    - demo: make mail app
    - theme: make it easier to introduce scales
    - component: bring in reach ui styles without importing css
    - components: add data-focus for :focus and pass down data-focus from elements like link which can have focus

---

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
