`d3-locale-da-dk`
==================

Danish locale for D3.js, modelled after [`da_DK` glibc locale](http://lh.2xlibre.net/locale/da_DK/)

Installation
------------

```sh
npm install d3-locale-da-dk
```

Usage
-----

You need `d3` installed and pass this module to `d3.locale`:

```js
var d3 = require('d3')
var da_DK = d3.locale(require('d3-locale-da-dk'))

da_DK.formatNumber('$,.2f')(12345.678) // => '12.345,67 kr'
```

License
-------

[ISC](LICENSE)
