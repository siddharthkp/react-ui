<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/54139355" height="200px"/>
  <br><br>
  <b>Get system-ui themes tokens from figma variables (local styles)</b>
  <br><br>

</p>

&nbsp;

#### install

```
yarn add @ds-tools/theme.figma --dev
```

&nbsp;

#### usage

Add it to your `package.json`

```json
{
  "scripts": {
    "theme.figma": "theme.figma --file cNjsABO9tkKDt6EXxzEtGw6R"
  }
}
```

and create a `.env` file with your [personal access token](https://www.figma.com/developers/api#access-tokens)

```
FIGMA_TOKEN:44444-6666cccc-cccc-cccc-cccc-1111cccccccc
```

&nbsp;

input:

A figma file that follows the [system-ui spec](https://system-ui.com/theme) naming convention

[Example](https://www.figma.com/file/cNjsABO9tkKDt6EXxzEtGw6R/Design-Tokens?node-id=0%3A1)

output:

```js
/* theme.js */

const theme = {
  fontSizes: [0, 12, 14, 16, 20, 30],
  fontWeights: [0, 400, 500, 700],
  colors: {
    white: '#fff',
    blues: {
      100: '#eff8ff',
      200: '#b7dbf7',
      300: '#a8d1f2',
      400: '#63a2d8',
      500: '#3692df',
      600: '#207cc9',
      700: '#2368a2',
      800: '#1a4971',
      900: '#203d54'
    },
    ...
  }
}

export default theme
```

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
