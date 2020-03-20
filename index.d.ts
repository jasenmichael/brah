import words = require('./words.json');

declare const brah: {
	/**
	All the words in alphabetical order.

	@example
	```
	import brah = require('brah');

	brah.all;
	//=> ['ace', 'amazing', …]
	```
	*/
	readonly all: Readonly<typeof words>;

	/**
	Random word.

	@example
	```
	import brah = require('brah');

	brah.random();
	//=> 'legendary'

	brah.random();
	//=> 'awesome'
	```
	*/
	random(): string;
};

export = brah;
