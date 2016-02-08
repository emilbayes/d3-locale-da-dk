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

You need `d3` installed as a `peerDependency`. I chose to have it as a peer
dependency, since D3.js is a large, with singletons such as `d3.event`.

```js
var da_DK = require('d3-locale-da-dk')

da_DK.formatNumber('$,.2f')(12345.678) // => '12.345,67 kr'
```

License
-------

[ISC](LICENSE)
