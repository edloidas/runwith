runwith
==

[![Travis Build Status][travis-image]][travis-url]
[![AppVeyor Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]

> Dynamically requires module and calls it with a given arguments

## Install ##

```
npm install --save runwith
```

## Usage ##

**From terminal:**

```
npm run runwith [module-path] [arguments...]
```

## Example ##

Let's imagine the following structure of the project:

```
+-- foo/
| `-- bar.js
+-- index.js
`-- package.json
```

**bar.js**

```js
module.exports = function callable(a, b) {
  // some code...
}
```

**package.json**

```json
{
  "name": "awesome-module",
  "version": "0.0.1",
  "scripts": {
    "bar": "runwith ./foo/bar someText 0"
  }
}
```

Afterwards, just run the `bar` script from terminal:

```
> npm run bar
```


## License ##

[MIT](LICENSE) © [Mikita Taukachou](https://edloidas.com)

<!-- Links -->
[travis-url]: https://travis-ci.org/edloidas/runwith
[travis-image]: https://img.shields.io/travis/edloidas/runwith.svg?label=linux%20build

[appveyor-url]: https://ci.appveyor.com/project/edloidas/runwith
[appveyor-image]: https://img.shields.io/appveyor/ci/edloidas/runwith.svg?label=windows%20build

[coveralls-url]: https://coveralls.io/github/edloidas/runwith?branch=master
[coveralls-image]: https://coveralls.io/repos/github/edloidas/runwith/badge.svg?branch=master

[dep-url]: https://david-dm.org/edloidas/runwith
[dep-image]: https://david-dm.org/edloidas/runwith.svg

[devdep-url]: https://david-dm.org/edloidas/runwith#info=devDependencies
[devdep-image]: https://david-dm.org/edloidas/runwith/dev-status.svg
