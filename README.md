# ink-flower

flower characters component for [ink](https://github.com/vadimdemedes/ink)


## Install
---

```bash
$ npm install ink-flower
# or
$ yarn add ink-flower
```

## Usage
---

```js
const { h, render } = require('ink');
const Flower = require('ink-flower');

render(<Flower text="ABCDEFG" />);
```

## Props

name | type | default | desc
---- | ---- | ---- | ----
text | string | "" | required
color | string | "green" | "red", "green", "blue"... e.t.c. -> see also [chalk](https://github.com/chalk/chalk)
mark | string | "#" | character of dot

### Supported characters

* uppercase alphabets: `A` - `Z`
* numbers: `0` - `9`
* others: `!`,  `?`, `#`, `$`,  `%`, `&`, `"`, `'`, `+`, `-`, `*`, `/`, `(`, `)`, `[`, `]`, `=`, `<`, `>`, `^`, `|`, `;`, `:`, `_`,  `@`, `.`, `,`


## Example

code:

```js
<Flower text="ABC" mark="*" />
```

result:
```
  *   ****   ***
 * *  *   * *   *
 * *  ****  *    
***** *   * *    
*   * *   * *   *
*   * ****   ***
```

## Caveat

* Display characters break if character length over window(terminal) size.

LICENSE
---

MIT © 2017 y-takey
