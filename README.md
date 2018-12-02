# string-crop-prototype

It is a easy way to reduce a string and add "..." in the end, but only if the string is really long.

## Examples

```js
import 'string-crop-prototype'
//require('string-crop-prototype') //to ES5

const string1 = 'Some string of length 24'.crop(30) //nothing happens
const string2 = 'Another string of length longer than 30'.crop(30) //Another string of length longe...

console.log(string1) //Some string of length 24
console.log(string2) //Another string of length longe...
```

