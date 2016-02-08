`d3-locale-danish`
==================

Danish locale for D3.js, modelled after [`da_DK` glibc locale](http://lh.2xlibre.net/locale/da_DK/)

Installation
------------

```sh
npm install d3-locale-danish
```

Usage
-----

You need `d3` installed as a `peerDependency`. I chose to have it as a peer
dependency, since D3.js is a large, with singletons such as `d3.event`.

I also chose to publish this as a separate module, instead of a PR to
`mbostock/d3`, as to not increase the size of D3.js further.

```js
var da_DK = require('d3-locale-danish')

da_DK.formatNumber('$,.2f')(12345.678) // => '12.345,67 kr'
```

License
-------

[ISC](LICENSE)
