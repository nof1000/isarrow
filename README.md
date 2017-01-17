# isArrow
> Checks whether a value is an arrow function

## Install
npm:
```
$ npm install isarrow --save
```

yarn:
```
$ yarn add isarrow
```

## Example
```js
const isArrow = require('isarrow');

console.log(isArrow("hello world")); // > false
console.log(isArrow(function() {})); // > false
console.log(isArrow(class {})); // > false
console.log(isArrow(() => {})); // > true
console.log(isArrow(123)); // > false
console.log(isArrow({})); // > false
console.log(isArrow([])); // > false
```

## LICENSE
[MIT](./LICENSE "The MIT License")
