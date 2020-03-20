# brah [![Build Status](https://travis-ci.org/sindresorhus/brah.svg?branch=master)](https://travis-ci.org/sindresorhus/brah)

> Get brah like words

Currently ~43 words. **I might accept more words.**

The word list itself is just a [JSON file](words.json) and can be used anywhere.


## Install

```
$ npm install brah
```


## Usage

```js
const brah = require('brah');

brah.random();
//=> 'legendary'

brah.random();
//=> 'awesome'

brah.all;
//=> ['ace', 'amazing', …]
```

## API

### .all

Type: `string[]`

All the words in alphabetical order.

### .random()

Type: `Function`

Random word.


## Related

- [random](https://github.com/sindresorhus/random) - Brah is a fork of this, with only words changed
- [random-cli](https://github.com/sindresorhus/brah-cli) - CLI for random
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words


## License
Brah is a fork of random, with only words changed, all credit goes to Sindre Sorhus.
MIT © [Sindre Sorhus](https://sindresorhus.com)
