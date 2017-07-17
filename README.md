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

* Currently supported characters are uppercase alphabet only. ( A - Z )

LICENSE
---

MIT © 2017 y-takey
