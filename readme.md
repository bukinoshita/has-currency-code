# has-currency-code [![Build Status](https://travis-ci.org/bukinoshita/has-currency-code.svg?branch=master)](https://travis-ci.org/bukinoshita/has-currency-code)

> Check if given string has currency code


## Install

```
$ npm install --save has-currency-code
```


## Usage

```js
const hasCurrencyCode = require('has-currency-code')

hasCurrencyCode('I have USD300') // true
hasCurrencyCode('I do not have money') // false
```


## API

### hasCurrencyCode(input, [options])

returns a `boolean` or `object`.

#### input

Type: `string`<br/>
Required

#### options

Type: `object`

##### toObject

Type: `boolean`<br/>
Default: `false`

If set to `true` it will return an `object`.


## Related

- [transform-currency](https://github.com/bukinoshita/transform-currency) — Transform currency code to symbol
- [currenci](https://github.com/bukinoshita/currenci) — List of currencies and get random currency
- [find-currency-code](https://github.com/bukinoshita/find-currency-code) — Find currency code from given string


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
